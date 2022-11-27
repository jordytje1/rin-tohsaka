const Command = require('../../structures/Command');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const path = require('path');
const { list } = require('../../util/Util');
const hats = require('../../assets/json/hat');

module.exports = class HatCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hat',
			group: 'edit-image',
			memberName: 'hat',
			description: 'Draws a hat over a user\'s avatar.',
			details: `**Hats:** ${hats.join(', ')}`,
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'type',
					prompt: `What type of hat would you like to use? Either ${list(hats, 'or')}.`,
					type: 'string',
					oneOf: hats,
					parse: type => type.toLowerCase()
				},
				{
					key: 'user',
					prompt: 'Which user would you like to edit the avatar of?',
					type: 'user',
					default: msg => msg.author
				},
				{
					key: 'addX',
					prompt: 'How far do you want to move the hat on the X-Axis?',
					type: 'integer',
					default: 0
				},
				{
					key: 'addY',
					prompt: 'How far do you want to move the hat on the Y-Axis?',
					type: 'integer',
					default: 0
				},
				{
					key: 'scale',
					prompt: 'By what percentage do you want to scale your hat?',
					type: 'integer',
					min: 0,
					max: 1000,
					default: 0
				}
			]
		});
	}

	async run(msg, { type, user, addX, addY, scale }) {
		scale /= 100;
		if (scale === 0) scale = 1;
		const avatarURL = user.displayAvatarURL({ format: 'png', size: 512 });
		try {
			const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'hat', `${type}.png`));
			const { body } = await request.get(avatarURL);
			const avatar = await loadImage(body);
			const canvas = createCanvas(avatar.width, avatar.height);
			const ctx = canvas.getContext('2d');
			ctx.drawImage(avatar, 0, 0);
			ctx.drawImage(base, 0 + addX, 0 + addY, avatar.width * scale, avatar.height * scale);
			return msg.say({ files: [{ attachment: canvas.toBuffer(), name: `${type}-hat.png` }] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
