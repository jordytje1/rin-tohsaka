# Rin
[![Build Status](https://github.com/fruitykitkats/rin/workflows/Lint/badge.svg?branch=master&event=push)](https://github.com/fruitykitkats/rin/actions)
[![Donate on PayPal](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/fruitykitkats)

Discord: fruitykitkats#0001

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

- ©2018-2022 fruitykitkats#0001

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

Total: 356

### Core:

* **changelog:** Responds with the bot's latest 10 commits.
* **cloc:** Responds with the bot's code line count.
* **donate:** Responds with the bot's donation links.
* **help:** Displays a list of available commands, or detailed information for a specific command.
* **info:** Responds with detailed bot information.
* **invite:** Responds with the bot's invite links.
* **options:** Responds with a list of server options.
* **ping:** Checks the bot's ping to the Discord server.
* **prefix:** Responds with the bot's command prefix.
* **report:** Reports something to the bot owner(s).

### Utility:

* **eval:** Executes JavaScript code. (Owner-Only)
* **avatar:** Responds with a user's avatar.
* **color:** Sends an image of the color you choose.
* **convert-image:** Converts an image from one format to another.
* **create-qr-code:** Converts text to a QR Code.
* **emoji-image:** Responds with an emoji's full-scale image.
* **emoji-list:** Responds with a list of the server's custom emoji.
* **first-message:** Responds with the first message ever sent to a channel.
* **format-number:** Formats a number to look more readable.
* **gravity:** Determines weight on another celestial object.
* **math:** Evaluates a math expression.
* **message-source:** Responds with a codeblock containing a message's contents.
* **prime:** Determines if a number is a prime number.
* **roman:** Converts a number to roman numerals.
* **scientific-notation:** Converts a number to scientific notation.
* **shorten-url:** Shortens a URL using bit.ly.
* **tax:** Determines the total cost of something plus tax.
* **translate:** Translates text to a specific language.
* **units:** Converts units to/from other units.

### Developer:

* **blacklist:** Blacklists a user or server. (Owner-Only)
* **dependency-update:** Checks for dependency updates. (Owner-Only)
* **exec:** Executes a command-line application. (Owner-Only)
* **generate-commands:** Generates the commands list. (Owner-Only)
* **ip:** Responds with the IP address the bot's server is running on. (Owner-Only)
* **reload:** Reloads a command. (Owner-Only)
* **report-respond:** Responds to a submitted report. (Owner-Only)
* **shutdown:** Shuts down the bot. (Owner-Only)
* **unblacklist:** Unblacklists a user or server. (Owner-Only)
* **webhook:** Posts a message to the webhook defined in the bot owner's `process.env`. (Owner-Only)

### Fun:

* **8-ball:** Asks your question to the Magic 8 Ball.
* **advice:** Responds with a random bit of advice.
* **boredom:** Responds with a random activity to try when you're bored.
* **choose:** Chooses between options you provide.
* **coin:** Flips a coin.
* **compliment:** Compliments a user.
* **fact:** Responds with a random fact.
* **fml:** Responds with a FML quote. (NSFW)
* **fortune:** Responds with a random fortune.
* **incorrect-quote:** Generates an incorrect quote.
* **joke:** Responds with a random joke.
* **kiss-marry-kill:** Determines who to kiss, who to marry, and who to kill.
* **light-novel-title:** Responds with a randomly generated Light Novel title.
* **never-have-i-ever:** Responds with a random "Never Have I Ever..." statement.
* **number-fact:** Responds with a random fact about a specific number.
* **offspring:** Determines if your new child will be a boy or a girl.
* **opinion:** Determines the opinion on something.
* **pun:** Responds with a random pun.
* **quantum-coin:** Flips a coin that lands on some form of nothing.
* **rank:** Ranks the options you provide.
* **rate:** Rates something.
* **roast:** Roasts a user.
* **roll:** Rolls a dice with a minimum/maximum value of your choice.
* **shower-thought:** Responds with a random shower thought, directly from r/Showerthoughts.
* **this-for-that:** So, basically, it's like a bot command for this dumb meme.
* **yes-no:** Answers a yes/no question randomly.

### Random Image:

* **ai-artwork:** Responds with randomly generated artwork.
* **ai-cat:** Responds with a randomly generated cat.
* **ai-fursona:** Responds with a randomly generated fursona.
* **ai-horse:** Responds with a randomly generated horse.
* **ai-vase:** Responds with a randomly generated vase.
* **ai-waifu:** Responds with a randomly generated waifu.
* **awwnime:** Responds with cute random anime art.
* **bird:** Responds with a random image of a bird.
* **bunny:** Responds with a random bunny image and fact.
* **cat:** Responds with a random cat image and fact.
* **dog:** Responds with a random dog image and fact.
* **duck:** Responds with a random duck image.
* **food:** Responds with a randomly generated food.
* **fox:** Responds with a random fox image.
* **hentai:** Responds with a random hentai image. (NSFW)
* **inspiration:** Responds with a randomly generated inspiration.
* **interesting:** Responds with a random interesting image.
* **light-novel-cover:** Responds with a randomly generated Light Novel cover. (NSFW)
* **meme:** Responds with a random meme.
* **porn:** Responds with a random porn image. (NSFW)
* **shiba:** Responds with a random image of a Shiba Inu.

### Seeded Randomizers:

* **butt:** Determines a user's butt quality.
* **coolness:** Determines a user's coolness.
* **cuteness:** Determines a user's cuteness.
* **friendship:** Determines how good friends two users are.
* **guess-looks:** Guesses what a user looks like.
* **iq:** Determines a user's IQ.
* **name-rater:** Determines a name's quality.
* **ship:** Ships two users together.
* **thicc:** Determines how thicc you are.
* **think-of:** Determines what a user thinks of another user.
* **worth:** Determines how much a user is worth.

### Automatic Response:

* **no-u:** no u
* **unflip:** Unflips a flipped table.

### Events:

* **anime-airing:** Responds with a list of the anime that air today.
* **apod:** Responds with today's Astronomy Picture of the Day.
* **calendar:** Responds with the calendar for a specific month and year.
* **covid-19:** Responds with stats for COVID-19.
* **days-since:** Responds with how many days there have been since a certain date.
* **days-until:** Responds with how many days there are until a certain date.
* **doomsday-clock:** Responds with the current time of the Doomsday Clock.
* **friday-the-13th:** Determines if today is Friday the 13th.
* **horoscope:** Responds with today's horoscope for a specific Zodiac sign.
* **humble-bundle:** Responds with the current Humble Bundle.
* **is-tuesday:** Determines if today is Tuesday.
* **iss:** Responds with where the Internation Space Station currently is.
* **people-in-space:** Responds with the people currently in space.
* **time:** Responds with the current time in a particular location.
* **today-in-history:** Responds with an event that occurred today in history.
* **year-progress:** Responds with the progress of the current year.

### Search:

* **anilist:** Responds with user information for an Anilist user.
* **anime-character:** Searches AniList for your query, getting character results.
* **anime:** Searches AniList for your query, getting anime results.
* **danbooru:** Responds with an image from Danbooru, with optional query. (NSFW)
* **define:** Defines a word.
* **http-cat:** Responds with a cat for an HTTP status code.
* **http-dog:** Responds with a dog for an HTTP status code.
* **http-duck:** Responds with a duck for an HTTP status code.
* **itunes:** Searches iTunes for your query.
* **jisho:** Defines a word, but with Japanese.
* **know-your-meme:** Searches Know Your Meme for your query.
* **league-of-legends:** Responds with information on a League of Legends champion.
* **lyrics:** Responds with lyrics to a song.
* **mal-badges:** Responds with a MyAnimeList user's mal-badges badge.
* **manga:** Searches AniList for your query, getting manga results.
* **movie:** Searches TMDB for your query, getting movie results.
* **nasa:** Searches NASA's image archive for your query.
* **npm:** Responds with information on an NPM package.
* **osu:** Responds with information on an osu! user.
* **pornhub:** Searches Pornhub for your query. (NSFW)
* **reddit:** Responds with information on a Reddit user.
* **safebooru:** Responds with an image from Safebooru, with optional query.
* **steam:** Searches Steam for your query.
* **stocks:** Responds with the current stocks for a company.
* **tv-show:** Searches TMDB for your query, getting TV show results.
* **twitter:** Responds with information on a Twitter user.
* **urban:** Defines a word, but with Urban Dictionary.
* **weather:** Responds with weather information for a specific location.
* **wikia:** Searches a specific Wikia wiki for your query.
* **wikihow:** Searches Wikihow for your query.
* **wikipedia:** Searches Wikipedia for your query.
* **xkcd:** Responds with an XKCD comic, either today's, a random one, or a specific one.
* **youtube:** Searches YouTube for your query.

### Analyzers:

* **age:** Responds with how old someone born in a certain year is.
* **birthstone:** Responds with the Birthstone for a month.
* **character-count:** Responds with the character count of text.
* **chinese-zodiac:** Responds with the Chinese Zodiac Sign for the given year.
* **dominant-color:** Determines the dominant color of an image.
* **face:** Determines the race, gender, and age of a face.
* **gender:** Determines the gender of a name.
* **has-transparency:** Determines if an image has transparency in it.
* **image-size:** Determines the size of an image.
* **is-it-down:** Determines if a website is down or not.
* **ocr:** Performs Optical Character Recognition on an image.
* **read-qr-code:** Reads a QR Code.
* **safe-url:** Determines if a URL is safe or not.
* **valid-url:** Tests whether a URL is valid or not.
* **zodiac-sign:** Responds with the Zodiac Sign for the given month/day.

### Games:

* **akinator:** Think about a real or fictional character, I will try to guess who it is.
* **balloon-pop:** Don't let yourself be the last one to pump the balloon before it pops!
* **battle:** Engage in a turn-based battle against another user or the AI.
* **bingo:** Play bingo with up to 99 other users.
* **box-choosing:** Do you believe that there are choices in life? Taken from Higurashi Chapter 4.
* **captcha:** Try to guess what the captcha says.
* **car-race:** Race a car against another user or the AI.
* **chance:** Attempt to win with a 1 in 1000 (or your choice) chance of winning.
* **connect-four:** Play a game of Connect Four with another user or the AI.
* **cram:** Play a game of Cram with another user.
* **domineering:** Play a game of Domineering with another user.
* **doors:** Open the right door, and you win the money! Make the wrong choice, and you get the fire!
* **dots-and-boxes:** Play a game of Dots and Boxes with another user.
* **emoji-emoji-revolution:** Can you type arrow emoji faster than anyone else has ever typed them before?
* **fishy:** Go fishing.
* **google-feud:** Attempt to determine the top suggestions for a Google search.
* **guesspionage:** Tests your knowledge of humans as you guess how people responded to poll questions.
* **hangman:** Prevent a man from being hanged by guessing a word as fast as you can.
* **hunger-games:** Simulate a Hunger Games match with up to 24 tributes.
* **imposter:** Who is the imposter among us?
* **island:** Who will be the final two left on the island after a series of vote-kicks?
* **jenga:** Play a game of Jenga with another user or the AI.
* **lie-swatter:** Players are given a fact and must quickly decide if it's True or a Lie.
* **lottery:** Attempt to win the lottery with 6 numbers.
* **math-quiz:** See how fast you can answer a math problem in a given time limit.
* **memory:** Test your memory.
* **nim:** Play a game of nim with another user or the AI.
* **obstruction:** Play a game of Obstruction with another user.
* **pick-a-number:** Two players pick a number between 1 and 10. Whoever's closer wins.
* **quiz-duel:** Answer a series of quiz questions against other opponents.
* **quiz:** Answer a quiz question.
* **rock-paper-scissors:** Play Rock-Paper-Scissors.
* **roulette:** Play a game of roulette.
* **russian-roulette:** Who will pull the trigger and die first?
* **slots:** Play a game of slots.
* **sorting-hat:** Take a quiz to determine your Hogwarts house.
* **spam-war:** See who can type more characters the fastest.
* **tic-tac-toe:** Play a game of tic-tac-toe with another user.
* **true-or-false:** Answer a true or false question.
* **waldo:** Try to find Waldo with spoiler tags!
* **will-you-press-the-button:** Responds with a random "Will You Press The Button?" dilemma.
* **word-chain:** Try to come up with words that start with the last letter of your opponent's word.
* **word-spud:** Hot potato, but with words.
* **would-you-rather:** Responds with a random "Would you rather ...?" question.

### Image Manipulation:

* **achievement:** Sends a Minecraft achievement with the text of your choice.
* **adorable:** Creates an adorable avatar based on the text you provide.
* **approved:** Draws an "approved" stamp over an image or a user's avatar.
* **blur:** Draws an image or a user's avatar but blurred.
* **bob-ross:** Draws an image or a user's avatar over Bob Ross' canvas.
* **chinese-restaurant:** Sends a Chinese restaurant sign with the text of your choice.
* **circle:** Draws an image or a user's avatar as a circle.
* **contrast:** Draws an image or a user's avatar but with contrast.
* **desaturate:** Draws an image or a user's avatar but desaturated.
* **distort:** Draws an image or a user's avatar but distorted.
* **eject:** Ejects a user.
* **fire-frame:** Draws a fiery border over an image or a user's avatar.
* **fire:** Burns a user's avatar.
* **font:** Types text in a specific font.
* **frame:** Draws a frame around an image or a user's avatar.
* **gandhi-quote:** Makes Mahatma Gandhi say the quote you want.
* **ghost:** Draws an image or a user's avatar but with a ghost-like transparency.
* **glass-shatter:** Draws an image or a user's avatar with a glass shatter in front of it.
* **glitch:** Draws an image or a user's avatar but glitched.
* **greyscale:** Draws an image or a user's avatar in greyscale.
* **hat:** Draws a hat over a user's avatar.
* **he-lives-in-you:** Draws a user's avatar over Simba from The Lion King's reflection.
* **highway-sign:** Sends a highway sign sign with the text of your choice.
* **i-have-the-power:** Draws a user's avatar over He-Man's face.
* **invert:** Draws an image or a user's avatar but inverted.
* **minecraft-skin:** Sends the Minecraft skin for a user.
* **mirror:** Draws an image or a user's avatar but mirrored on the X/Y axis (or both).
* **motion-blur:** Draws an image or a user's avatar with motion blur.
* **needs-more-jpeg:** Draws an image or a user's avatar as a low quality JPEG.
* **pixelize:** Draws an image or a user's avatar pixelized.
* **police-tape:** Draws police tape over an image or a user's avatar.
* **rainbow:** Draws a rainbow over an image or a user's avatar.
* **rejected:** Draws a "rejected" stamp over an image or a user's avatar.
* **resize:** Draws an image or a user's avatar resized to the size you want.
* **rip:** Draws a user's avatar over a gravestone.
* **rotate:** Draws an image or a user's avatar but rotated a number of degrees.
* **sepia:** Draws an image or a user's avatar in sepia.
* **silhouette:** Draws a silhouette of an image or a user's avatar.
* **snapcode:** Responds with the Snapcode of a Snapchat user.
* **spongebob-time-card:** Sends a Spongebob Time Card with the text of your choice.
* **spotify-now-playing:** Draws an image or a user's avatar on a Spotify album with the name and artist of your choice.
* **square:** Draws an image or a user's avatar as a square.
* **steam-now-playing:** Draws a user's avatar over a Steam "now playing" notification.
* **subtitle:** Adds subtitles to an image.
* **tint:** Draws an image or a user's avatar but tinted a specific color.
* **triggered:** Draws a user's avatar over the "Triggered" meme.
* **wanted:** Draws an image or a user's avatar over a wanted poster.
* **wild-pokemon:** Draws an image or a user's avatar over a wild Pokémon appearance.
* **you-died:** Sends a "You Died" screen over an image or a user's avatar.

### Meme Generators:

* **3000-years:** Draws an image or a user's avatar over Pokémon's "It's been 3000 years" meme.
* **alert:** Sends a Presidential Alert message with the text of your choice.
* **bart-chalkboard:** Sends a "Bart Chalkboard" meme with the text of your choice.
* **be-like-bill:** Sends a "Be Like Bill" meme with the name of your choice.
* **beautiful:** Draws a user's avatar over Gravity Falls' "Oh, this? This is beautiful." meme.
* **boardroom-meeting:** Sends a "Boardroom Meeting" meme with the text of your choice.
* **challenger:** Draws an image or a user's avatar over Smash Bros.'s "Challenger Approaching" screen.
* **change-my-mind:** Sends a "Change My Mind" meme with the text of your choice.
* **chi-idea:** Sends a "Daddy, I've got an idea!" Takagi-san meme with the text of your choice.
* **crush:** Draws an image or a user's avatar as Wolverine's crush.
* **dear-liberals:** Sends a "Dear Liberals" meme with words of your choice.
* **deep-fry:** Draws an image or a user's avatar but deep-fried.
* **distracted-boyfriend:** Draws three user's avatars over the "Distracted Boyfriend" meme.
* **drakeposting:** Sends a "Drakeposting" meme with the text of your choice.
* **edd-facts-book:** Sends a "Double D's Facts Book" meme with the fact of your choice.
* **food-broke:** Draws a user's avatar over the "Food Broke" meme.
* **for-five-hours:** Sends an "I've looked at this for 5 hours now" meme with the image of your choice.
* **genie-rules:** Sends a "There are 4 rules" meme with the text of your choice.
* **girl-worth-fighting-for:** Draws an image or a user's avatar as the object of Ling's affection.
* **gru-plan:** Sends a Gru's Plan meme with steps of your choice.
* **i-fear-no-man:** Sends a "I fear no man" meme with the text of your choice.
* **lisa-presentation:** Sends a "Lisa Presentation" meme with the presentation of your choice.
* **mario-bros-views:** Sends a "Mario Bros. Views" meme with the text of your choice.
* **my-collection-grows:** Sends a "My collection grows richer" Nekopara meme with the text of your choice.
* **phoebe-teaching-joey:** Sends a "Phoebe Teaching Joey" meme with text of your choice.
* **pills:** Sends a "Hard to Swallow Pills" meme with the text of your choice.
* **plankton-plan:** Sends a Plankton's Plan meme with steps of your choice.
* **pogchamp:** Sends a pogchamp duplicated however many times you want.
* **scroll-of-truth:** Sends a "Scroll of Truth" meme with the text of your choice.
* **sonic-says:** Sends a "Sonic Says" meme with the quote of your choice.
* **spiderman-pointing:** Sends a "Spiderman Pointing at Spiderman" meme with the text of your choice.
* **spongebob-burn:** Sends a "Spongebob Throwing Something into a Fire" meme with words of your choice.
* **this-guy:** Draws an image or a user's avatar over the "Get a load of this guy" meme.
* **two-buttons:** Sends a "Two Buttons" meme with the buttons of your choice.
* **ultimate-tattoo:** Draws an image or a user's avatar as "The Ultimate Tattoo".
* **worthless:** Draws an image or a user's avatar over Gravity Falls' "This is worthless." meme.

### Text Manipulation:

* **base64:** Converts text to/from Base64.
* **binary:** Converts text to binary.
* **cow-say:** Makes a cow say your text.
* **embed:** Sends text in an embed.
* **emojify:** Converts text to emoji form.
* **hex:** Converts text to hex.
* **latlmes:** Creates a Latlmes fake link that redirects to a rickroll.
* **leet:** Converts text to l33t speak.
* **lmgtfy:** Creates a LMGTFY link with the query you provide.
* **lolcat:** Converts text to lolcat.
* **md5:** Creates a hash of text with the MD5 algorithm.
* **owo:** OwO.
* **repeat:** Repeat text over and over and over and over (etc).
* **reverse:** Reverses text.
* **say:** Make me say what you want, master.
* **sha-1:** Creates a hash of text with the SHA-1 algorithm.
* **sha-256:** Creates a hash of text with the SHA-256 algorithm.
* **ship-name:** Creates a ship name from two names.
* **shuffle:** Shuffles text.
* **snake-speak:** Convertsssss text to sssssnake ssssspeak.
* **spoiler-letter:** Sends text with each and every character as an individual spoiler.
* **superscript:** Converts text to tiny text.
* **tebahpla:** Reverses the alphabet of text.
* **txt:** Generates a TXT file from the text you provide.
* **unspoiler:** Removes all spoilers from a message.
* **upside-down:** Flips text upside-down.
* **url-decode:** Decodes URL characters to regular characters.
* **url-encode:** Encodes text to URL-friendly characters.
* **yoda:** Converts text to Yoda speak.
* **zalgo:** Converts text to zalgo.

### Phone:

* **admin-phone:** Starts an admin phone call with a server. (Owner-Only)
* **hang-up:** Hangs up the current phone call.
* **phone-block:** Gives instructions for blocking a channel or server.
* **phone-book:** Looks up phone-enabled servers.
* **phone-info:** Gives information on the current phone call.
* **phone:** Starts a phone call with a random server.

### Coding Tools:

* **beautify:** Beautifies code with js-beautify.
* **lint-rule:** Responds with information on an ESLint rule.
* **lint:** Lints code using ESLint.

### Other:

* **portal-send:** Send a message to a portal channel.
* **prune:** Deletes up to 99 messages from the current channel.
* **rename-all:** Renames every member of the server. (Owner-Only)
* **screenshot:** Takes a screenshot of any webpage.

### Roleplay:

* **bite:** Bites a user.
* **blush:** Blushes at a user.
* **celebrate:** Celebrates.
* **eat:** Feeds a user.
* **fist-bump:** Fist-bumps a user.
* **high-five:** High Fives a user.
* **hold-hands:** Holds hands with a user.
* **hug:** Hugs a user.
* **inhale:** Inhales a user.
* **kill:** Kills a user.
* **kiss:** Kisses a user.
* **pat:** Pats a user.
* **poke:** Pokes a user.
* **punch:** Punches a user.
* **slap:** Slaps a user.
* **sleep:** Puts a user to sleep.
* **smile:** Smiles at a user.
* **wake-up:** Wakes up a user.
* **wave:** Waves at a user.
* **wink:** Winks at a user.

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
