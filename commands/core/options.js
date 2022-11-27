const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');

module.exports = class OptionsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'options',
			aliases: ['options-list'],
			group: 'core',
			memberName: 'options',
			description: 'Responds with a list of server options.',
			guarded: true
		});
	}

	run(msg) {
		return msg.say(stripIndents`
			__**Server Options**__
			Place the option in the appropriate channel's topic to use.

			__General Options__
			\`<rin:disable-leave>\` Disables leave messages (System Channel).

			__Phone Options__
			\`<rin:phone>\` Allows this channel to recieve phone calls.
			\`<rin:phone:auto-accept>\` Automatically accepts all incoming phone calls.
			\`<rin:phone:no-notice>\` Hides the abuse notice from phone call pick-ups.
			\`<rin:phone:no-voicemail>\` Prevents this channel from recieving voicemails for missed calls.
			\`<rin:phone:no-random>\` Makes the channel only able to be called directly, rather than picked randomly.
			\`<rin:phone:block:INSERTIDHERE>\` Blocks a channel or server from contacting you via phone.
			\`<rin:phone-book:hide>\` Hides this channel from \`phone-book\`.

			__Portal Options__
			\`<rin:portal>\` Marks the channel as a portal channel for \`portal-send\`.
			\`<rin:portal:hide-name>\` Hides the channel's name when the channel is chosen to recieve a portal message.
		`);
	}
};
