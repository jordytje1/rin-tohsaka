const Command = require('../../structures/Command');
const { MessageEmbed, version: djsVersion } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const { formatNumber, embedURL } = require('../../util/Util');
const { version, dependencies, optionalDependencies } = require('../../package');
const deps = { ...dependencies, ...optionalDependencies };
const permissions = require('../../assets/json/permissions');
const { RIN_GITHUB_REPO_USERNAME, RIN_GITHUB_REPO_NAME } = process.env;
const source = RIN_GITHUB_REPO_NAME && RIN_GITHUB_REPO_USERNAME;

module.exports = class InfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'info',
			aliases: ['stats', 'uptime', 'bot-info'],
			group: 'core',
			memberName: 'info',
			description: 'Responds with detailed bot information.',
			guarded: true,
			clientPermissions: ['EMBED_LINKS']
		});
	}

	async run(msg) {
		const invite = await this.client.generateInvite({ permissions });
		const repoURL = `https://github.com/${RIN_GITHUB_REPO_USERNAME}/${RIN_GITHUB_REPO_NAME}`;
		const embed = new MessageEmbed()
			.setColor(0x00AE86)
			.setFooter('©2018-2022 fruitykitkats#0001')
			.addField('❯ Servers', formatNumber(this.client.guilds.cache.size), true)
			.addField('❯ Commands', formatNumber(this.client.registry.commands.size), true)
			.addField('❯ Shards', formatNumber(this.client.options.shardCount), true)
			.addField('❯ Home Server',
				this.client.options.invite ? embedURL('Invite', this.client.options.invite) : 'None', true)
			.addField('❯ Invite', embedURL('Add Me', invite), true)
			.addField('❯ Source Code', source ? embedURL('GitHub', repoURL) : 'N/A', true)
			.addField('❯ Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
			.addField('❯ Uptime', moment.duration(this.client.uptime).format('d:hh:mm:ss'), true)
			.addField('❯ Version', `v${version}`, true)
			.addField('❯ Node.js', process.version, true)
			.addField('❯ Discord.js', `v${djsVersion}`, true)
			.addField('❯ Dependencies', Object.keys(deps).sort().join(', '));
		return msg.embed(embed);
	}
};
