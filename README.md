# MushroomStew

A basic discord bot written for the Nerd.nu discord server.

# Installation instructions

## Adding the bot to a server:
*you must be logged in as the user that will own the bot to do this*  
1. Navigate to https://discordapp.com/developers/applications/
2. Click "Create an Application"
3. Add an App Name, Description, and Icon. 
4. Click "Create App"
5. Click "Create a Bot User" (click yes on the confirmation screen)
6. Uncheck the "Public Bot" and "Require OAuth2" checkboxes
7. Scroll down and click "Save Changes"
8. Under APP BOT USER you will see a line that says `Token: click to reveal`. Click this to get the bots token. **SAVE THIS FOR LATER**
9. Under APP DETAILS look for CLIENT ID and copy the number
10. Navigate to https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot (replace `CLIENTID` with the value you just copied)
11. You should be presented with a list of servers that you can invite the bot to. Select your server and press OK. 
    * Note: If you do not see any make sure you have the `Manage Server` permission in discord and try again.

## Running the bot
Your server must be running NODE.JS and will need some form of autorun script. Forever.js works perfectly fine if you have no other preference.   
`npm i --no optional -g forever` 

**Assuming you are using `forever` to run the bot:  
1. Upload the bot to the server
2. Rename `config.json.template` to `config.json` and populate the `SEKRIT TOKEN` and `OWNER ID` values
    * `SEKRIT TOKEN` - comes from step 8 above
    * `OWNER ID` - In discord, type `\@username#1234` to ping the owner of the bot, and copy the number (excluding <@ and >). Alternatively if you have developer mode turned on you can right click the user and "Copy ID"
2. From console, run `chmod -R a+rwx folderName`
3. `cd folderName`
4. `forever start bot.js`

# Bot Commands & Actions

* Automatic Functions
    * logs user joins to `#join-logs`
    * logs users leaving to `#join-logs`
    * logs deleted messages to `#deletion-logs`
    * Assigns role `Nerds` on user join
        * nerdbot had a supplementary command to display "all users with no role", currently this bot does not contain this command so you'll want to check the userlist if the bot is down for any length of time.
    * Auto-deletes discord invites and PM's the author: 
    >I have deleted your link from #channel, per our rules here http://nerd.nu/rules we do not allow advertising other servers here. If you feel this is an error please contact a Head Admin.
* Staff Functions
    * `?allowping` - Enables @role mentions for all user roles.
    * `?denyping` - Disables @role mentions for all user roles.
    * `?ban @user [reason]` - Bans the user specified, and logs to the logging channel
    * `?unban [userid] [reason]` - Unbans the user ID specified and logs to bot-logs channel
    * `?lookup [username]` - Performs a lookup using MCBouncer.com and returns a users bans/notes in Minecraft.
    * `?prune [user] [#]` - Deletes [#] of messages from a channel by a specified user
* Head Admin functions
    * `?botgame [type] [arguments]` - Allows you to change the bots game: !botgame [playing | listening | watching [text].
    * `?cmdstatus` - Displays all commands and their status.
    * `?delete [#]` - Deletes messages from a channel. Currently restricted to the Head Admin role & bot owner for testing reasons, and requires the bot to have the 'Manage Messages' permission.
    * `?headrole @username [rolename]` - Allows head admins to apply roles to users.
    * `?reload [command]` - Reloads the bots command to allow edits to take effect. Currently this is restricted to the owner of the bot
    * `?restart` - Restarts the bot (provided the auto-run script hasn't crashed). Currently this is restricted to the owner of the bot.
* Player Commands
    * `?8ball [question]` - Category: Fun
    * `?botinfo` - Category: Info
    * `?c [temp]` - Category: Math
    * `?chucknorris` - Category: Fun
    * `?coin` - Category: Fun
    * `?dadjoke` - Category: Fun
    * `?f [temp]` - Category: Math
    * `?format` - Category: Info
    * `?help [<category>]` - Category: Info
    * `?km [distance in miles]` - Category: Math
    * `?mi [distance in kilometers]` - Category: Math
    * `?myinfo [<user ID>]` - Category: Info
    * `?nerd` - Category: Info
    * `?nh [username]` - Category: Info
    * `?nick [new nickname]` - Category: Info
    * `?ping` - Category: Info
    * `?role [rolename]` - Category: Roles
    * `?roleinfo [role name]` - Category: Roles
    * `?rolelist` - Category: Roles
    * `?roll [#]` - Category: Fun
    * `?serverinfo` - Category: Info
    * `?time [type]` - Category: Math
    * `?xkcd [<id number>]` - Category: Fun

# Required Permissions:
* Make sure the bots role is `Justice`, unless the role was deleted it should have all the necessary perms
* Just in case:
    * Manage Roles
    * Manage Channels
    * Kick Members
    * Ban Members
    * Manage Nicknames
    * Read Text Channels & See Voice Channels
    * Send Messages
    * Manage Messages
    * Embed Links
    * Attach Files
    * Read Message History

# Required Channels
* `#deletion-logs`
* `#join-logs`
* `#logs`
* `#nickname-logs`
* `#ban-logs`
* `#restart-logs`