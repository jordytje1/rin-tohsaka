const { CommandoClient } = require('discord.js-commando');
const { WebhookClient } = require('discord.js');
const request = require('node-superfetch');
const Collection = require('@discordjs/collection');
const winston = require('winston');
const fontFinder = require('font-finder');
const fs = require('fs');
const path = require('path');
const Font = require('./Font');
const PhoneManager = require('./phone/PhoneManager');
const activities = require('../assets/json/activity');
const leaveMsgs = require('../assets/json/leave-messages');
const { RIN_WEBHOOK_ID, RIN_WEBHOOK_TOKEN, REPORT_CHANNEL_ID, JOIN_LEAVE_CHANNEL_ID } = process.env;

module.exports = class RinClient extends CommandoClient {
	constructor(options) {
		super(options);

		this.logger = winston.createLogger({
			transports: [new winston.transports.Console()],
			format: winston.format.combine(
				winston.format.timestamp({ format: 'MM/DD/YYYY HH:mm:ss' }),
				winston.format.printf(log => `[${log.timestamp}] [${log.level.toUpperCase()}]: ${log.message}`)
			)
		});
		this.fonts = new Collection();
		this.webhook = new WebhookClient(RIN_WEBHOOK_ID, RIN_WEBHOOK_TOKEN, { disableMentions: 'everyone' });
		this.blacklist = { guild: [], user: [] };
		this.games = new Collection();
		this.phone = new PhoneManager(this);
		this.activities = activities;
		this.leaveMessages = leaveMsgs;
		this.adultSiteList = null;
	}

	async registerFontsIn(filepath) {
		const files = fs.readdirSync(filepath);
		for (const file of files) {
			const metadata = await fontFinder.get(path.join(filepath, file));
			const font = new Font(path.join(filepath, file), file, metadata);
			this.fonts.set(file, font);
			font.register();
		}
		return this.fonts;
	}

	importBlacklist() {
		const read = fs.readFileSync(path.join(__dirname, '..', 'blacklist.json'), { encoding: 'utf8' });
		const file = JSON.parse(read);
		if (typeof file !== 'object' || Array.isArray(file)) return null;
		if (!file.guild || !file.user) return null;
		for (const id of file.guild) {
			if (typeof id !== 'string') continue;
			if (this.blacklist.guild.includes(id)) continue;
			this.blacklist.guild.push(id);
		}
		for (const id of file.user) {
			if (typeof id !== 'string') continue;
			if (this.blacklist.user.includes(id)) continue;
			this.blacklist.user.push(id);
		}
		return file;
	}

	exportBlacklist() {
		let text = '{\n	"guild": [\n		';
		if (this.blacklist.guild.length) {
			for (const id of this.blacklist.guild) {
				text += `"${id}",\n		`;
			}
			text = text.slice(0, -4);
		}
		text += '\n	],\n	"user": [\n		';
		if (this.blacklist.user.length) {
			for (const id of this.blacklist.user) {
				text += `"${id}",\n		`;
			}
			text = text.slice(0, -4);
		}
		text += '\n	]\n}\n';
		const buf = Buffer.from(text);
		fs.writeFileSync(path.join(__dirname, '..', 'blacklist.json'), buf, { encoding: 'utf8' });
		return buf;
	}

	async fetchAdultSiteList(force = false) {
		if (!force && this.adultSiteList) return this.adultSiteList;
		const { text } = await request.get('https://raw.githubusercontent.com/blocklistproject/Lists/master/porn.txt');
		this.adultSiteList = text.split('\n')
			.filter(site => site && !site.startsWith('#'))
			.map(site => site.replace(/^(0.0.0.0 )/, '')); // eslint-disable-line no-control-regex
		return this.adultSiteList;
	}

	fetchReportChannel() {
		if (!REPORT_CHANNEL_ID) return null;
		return this.channels.fetch(REPORT_CHANNEL_ID);
	}

	fetchJoinLeaveChannel() {
		if (!JOIN_LEAVE_CHANNEL_ID) return null;
		return this.channels.fetch(JOIN_LEAVE_CHANNEL_ID);
	}
};
