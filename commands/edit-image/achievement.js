const Command = require('../../structures/Command');
const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const { shortenText } = require('../../util/Canvas');

module.exports = class AchievementCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'achievement',
			aliases: ['minecraft-achievement', 'achieve'],
			group: 'edit-image',
			memberName: 'achievement',
			description: 'Sends a Minecraft achievement with the text of your choice.',
			throttling: {
				usages: 1,
				duration: 10
			},
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'text',
					prompt: 'What should the text of the achievement be?',
					type: 'string',
					max: 50
				}
			]
		});
	}

	async run(msg, { text }) {
		const base = await loadImage(path.join(__dirname, '..', '..', 'assets', 'images', 'achievement.png'));
		const canvas = createCanvas(base.width, base.height);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(base, 0, 0);
		ctx.font = this.client.fonts.get('Minecraftia.ttf').toCanvasString(17);
		ctx.fillStyle = '#ffff00';
		ctx.fillText('Achievement Get!', 60, 40);
		ctx.fillStyle = '#ffffff';
		ctx.fillText(shortenText(ctx, text, 230), 60, 60);
		return msg.say({ files: [{ attachment: canvas.toBuffer(), name: 'achievement.png' }] });
	}
};
