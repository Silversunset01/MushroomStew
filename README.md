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