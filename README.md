# Rin
[![Build Status](https://github.com/fruitykitkats/rin/workflows/Lint/badge.svg?branch=master&event=push)](https://github.com/fruitykitkats/rin/actions)
[![Donate on PayPal](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/fruitykitkats)
Discord: fruitykitkats#7728

Rin is a Discord bot coded in JavaScript with
[discord.js](https://discord.js.org/) using the
[Commando](https://github.com/discordjs/Commando) command framework. With over
300 commands, she is one of the most feature-rich bots out there. Formerly
"Shiro".

## Table of Contents

- [Copyright](#copyright)
- [Permissions](#permissions)
- [Fun Information](#fun-information)
- [Filling Out Your .env File](#filling-out-your-env-file)
	* [Discord-related Info](#discord-related-info)
	* [Emoji IDs](#emoji-ids)
	* [API Keys, IDs, and Secrets](#api-keys-ids-and-secrets)
	* [Imgur Album IDs](#imgur-album-ids)
- [Options](#Options)
	* [General Options](#general-options)
	* [Phone Options](#phone-options)
	* [Portal Options](#portal-options)
- [Other Features](#other-features)
- [Licensing](#licensing)

## Copyright

- ©2018-2022 fruitykitkats#8081

## Permissions

Rin needs several permissions to be able to do what she does. Below
is every permission Rin asks for, and what commands you lose if you
don't grant that permission.

- **Create Instant Invite** is needed to allow owners to join your server to test if needed.
	* You lose no commands by turning this off, but you might hinder support.
- **View Audit Log** is not needed yet, but is something Rin might utilize in the future.
- **Change Nickname** is not _needed_, but is included as a basic permission.
- **View Channels** is required for every single command to work.
- **Send Messages** is required for every single command to work.
- **Manage Messages** allows Rin to use the `prune` command.
	* It also allows the `say` command to delete your message, but the command will still work without it.
- **Embed Links** is required to allow commands that send embeds to work. Too many commands to list use it.
- **Attach Files** is required to allow commands that send files to work. Too many commands to list use it.
- **Read Message History** allows Rin to use the `first-message` and `prune` commands.
	* It is also required to allow Rin to react to messages alongside "Add Reactions".
- **Mention @everyone, @here, and All Roles** allows Rin to use the `where-is-everybody` command.
- **Use External Emojis** allows Rin to use custom emoji in certain commands.
	* While the commands benefit from it, it is not required for the commands to work.
- **Add Reactions** allows Rin to use commands that add reactions to messages in certain commands.
	* While the commands benefit from it, it is not required for the commands to work.
	* "Read Message History" is also required to allow Rin to react.

## Fun Information

- 300+ commands
- 26,000+ lines of JavaScript
- 45,000+ lines of JSON data
- 3 years of development

## Filling Out The .env File

Getting _all_ the API keys for your `.env` file can be a pain on a
bot this big, I know. That's why I've compiled a list here of where
to go to get _every single API key_. Note, not all of these are free.

### Discord-related Info

* `RIN_TOKEN` can be obtained at the [Discord Developer Portal](https://discord.com/developers/applications/).
* `OWNERS` is a comma-seperated list of Discord User IDs.
* `LOVER_USER_ID` is a Discord User ID for your lover. It rigs commands like `coolness` and `cuteness`. Totally optional, loners can leave it out.
* `RIN_PREFIX` is the prefix you want the bot to have. Like `x;`.
* `INVITE` is an invite link to a Discord server. The whole thing, not just the code.
* `RIN_WEBHOOK_ID` is the ID of the webhook you want the `webhook` command to use.
* `RIN_WEBHOOK_TOKEN` is the token of the webhook you want the `webhook` command to use.
* `REPORT_CHANNEL_ID` is the ID of the Discord channel you want to send messages from `report` to. Not required, and if not provided the report command simply DMs the owner.
* `JOIN_LEAVE_CHANNEL_ID` is the ID of the Discord channel to send a message to whenever a new server adds or removes the bot. Not required.

### Emoji IDs

All the emoji IDs are the IDs of Discord custom emoji. You need to
make these yourself, but none are required, and any left out will
simply switch to basic text.

### API Keys, IDs, and Secrets

Here's where things get LONG. If you're greeted with a log-in page
when clicking any of these links, you'll need an account for that
API. All are free unless otherwise stated.

* `ALPHA_VANTAGE_KEY` can be obtained at the [Alpha Vantage website](https://www.alphavantage.co/support/#api-key).
* `BITLY_KEY` can be obtained by getting a [Generic Access Token](https://bitly.is/accesstoken).
* `GITHUB_ACCESS_TOKEN` can be obtained by [creating an access token](https://github.com/settings/tokens).
* `GOOGLE_KEY` can be obtained at the [Google Developer Console](https://console.developers.google.com/). Be sure to click "Enable APIs and Services" and enable the following APIs:
	- [YouTube Data API](https://console.developers.google.com/apis/library/youtube.googleapis.com)
	- [Safe Browsing API](https://console.developers.google.com/apis/library/safebrowsing.googleapis.com)
* `GOV_KEY` can be obtained at the [NASA Open APIs portal](https://api.nasa.gov/).
* `OPENWEATHERMAP_KEY` can be obtained at the [OpenWeatherMap website](https://openweathermap.org/price). Click "Get API Key" on the plan you want (probably Free).
* `OSU_KEY` can be obtained by [signing up at the osu! API page](https://osu.ppy.sh/p/api/). Whether this link takes you to the right page or not is hit-or-miss.
* `THECATAPI_KEY` can be obtained at the [TheCatAPI website](https://thecatapi.com/).
* `TMDB_KEY` can be obtained by [following these instructions at the TMDB website](https://www.themoviedb.org/documentation/api). Read the "How do I apply for an API key?" section.
* `WEBSTER_KEY` can be obtained by [going to the Dictionary API website](https://dictionaryapi.com/). Find the "GET STARTED USING OUR API" section.
* `RIN_GITHUB_REPO_NAME` and `RIN_GITHUB_REPO_USERNAME` are just the username and name of Rin's repo on GitHub. For example, `fruitykitkats` for the username and `rin` for the name.

### Imgur Album IDs

This section is a bit different, as all of these keys are the same
process. First, [sign up for Imgur](https://imgur.com/). Then, just
go to your profile and make albums that contain the images for the
command you want to use. Use the ID of that album (look at the URL)
as the variable. Yes, you need to fill these albums yourself.

## Options

Options in Rin are configured using channel topics. Place the option
in the appropriate channel's topic to use it.

### General Options
* `<rin:disable-leave>` Disables leave messages (System Channel).

### Phone Options
* `<rin:phone>` Allows this channel to recieve phone calls.
* `<rin:phone:auto-accept>` Automatically accepts all incoming phone calls.
* `<rin:phone:no-notice>` Hides the abuse notice from phone call pick-ups.
* `<rin:phone:no-voicemail>` Prevents this channel from recieving voicemails for missed calls.
* `<rin:phone:no-random>` Makes the channel only able to be called directly, rather than picked randomly.
* `<rin:phone:block:INSERTIDHERE>` Blocks a channel or server from contacting you via phone.
* `<rin:phone-book:hide>` Hides this channel from `phone-book`.

### Portal Options
* `<rin:portal>` Marks the channel as a portal channel for `portal-send`.
* `<rin:portal:hide-name>` Hides the channel's name when the channel is chosen to recieve a portal message.

## Commands

Total: over 300

COMMAND LIST COMING SOON

## Other Features

Some Rin features aren't technically commands, but are part of Rin
nonetheless.

- Leave messages are automatically sent to any channel that recieves welcome messages. These can be turned off with [an option](#options).
- Some commands will automatically run when a certain phrase is said in any message, regardless of if the command itself was called or not. These are:
	* Saying "no u" runs `no-u`.
	* Saying "(╯°□°）╯︵ ┻━┻" runs `unflip`.

## Licensing

The bot is licensed under the GPL 3.0 license. See the file `LICENSE` for more
information. If you plan to use any part of this source code in your own bot, I
would be grateful if you would include some form of credit somewhere.
