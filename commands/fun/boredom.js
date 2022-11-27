const Command = require('../../structures/Command');
const request = require('node-superfetch');

module.exports = class BoredomCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'boredom',
			aliases: ['bored'],
			group: 'fun',
			memberName: 'boredom',
			description: 'Responds with a random activity to try when you\'re bored.'
		});
	}

	async run(msg) {
		try {
			const { body } = await request.get('https://www.boredapi.com/api/activity/');
			return msg.say(`${body.activity} (${body.type})`);
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
