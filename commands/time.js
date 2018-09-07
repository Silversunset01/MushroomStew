const Discord = require("discord.js");  //required for embeds apparently
const request = require('axios');       //required for API requests
const config = require("../config.json"); //required for config.owner info

exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var type = args[0];
    var timeck = args[1];
    var xtime = args.slice(1, args.length);
    var time = xtime.join(" ");
    var embed = new Discord.RichEmbed()
            .setColor(0xE8DFEA)
            .setTimestamp()
            .setFooter(config.prefix + "time zone | " + msg.author.tag);
                
    if (!type) {
        var tz = "Please specify a command.\n\n**" + config.prefix + "time to [time]** - to display the time until a specified date. Your time should be in the following format:\n`March 4, 2018 23:18:00 GMT-0500` \n\n**" + config.prefix + "time zone [time zone]** - to see the current time in the specified timezone. Available timezones are `EST`, `EDT`, `CST`, `CDT`, `MST`, `MDT`, `PST`, `PDT, `UTC`, `GMT`, `EET`, `AEST`, `AEDT`"
    } else if (type === "to") {
        //---------------------------------------------------------------------------------------------------
            var now = new Date(); 
            var then = new Date(time); 
            var then_UTC = Date.UTC(then.getUTCFullYear(), then.getUTCMonth(), then.getUTCDate(),  then.getUTCHours(), then.getUTCMinutes(), then.getUTCSeconds()); 
            var now_UTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
            var difference = then_UTC - now_UTC;

            if (!difference) {
                var tz = "Your time should be in the following format:\n`March 4, 2018 23:18:00 GMT-0500`"
            } else {
                var days = Math.floor(difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                
                var tz = "**Time Remaining**\n" + days + " days " + hours + " hours " + minutes + " minutes ";
            }          
        //---------------------------------------------------------------------------------------------------
    } else if (type === "zone") {
        switch (time.toUpperCase()) {
            case "EST": 
            case "EDT": var tz = new Date().toLocaleString('en-US', {timeZone: "America/New_York", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;
            case "PST": 
            case "PDT": var tz = new Date().toLocaleString('en-US', {timeZone: "America/Los_Angeles", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;
            case "CST": 
            case "CDT": var tz = new Date().toLocaleString('en-US', {timeZone: "America/Chicago", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;
            case "MST": 
            case "MDT": var tz = new Date().toLocaleString('en-US', {timeZone: "America/Denver", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;
            case "EET": var tz = new Date().toLocaleString('en-US', {timeZone: "Europe/Helsinki", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;
            case "UTC": var tz = new Date().toLocaleString('en-US', {timeZone: "UTC", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;
            case "GMT": var tz = new Date().toLocaleString('en-US', {timeZone: "Europe/London", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;  
            case "AEST": 
            case "AEDT": var tz = new Date().toLocaleString('en-US', {timeZone: "Australia/Sydney", timeZoneName: "long", weekday: "long", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'}); break;
            default: var tz = "You must specify a timezone: `!time zone <timezone>` \n Available timezones are `EST`, `EDT`, `CST`, `CDT`, `MST`, `MDT`, `PST`, `PDT, `UTC`, `GMT`, `EET`, `AEST`, `AEDT`"; break;
          };
    }
        embed.setDescription(`${tz}`)
        msg.channel.send({embed}).catch(console.error);
    
};

//for !help command (mandatory or the bot will error!)
exports.help = {
    name: "time",
    category: "Math",
    description: "Displays various time related commands. `?time zone` - displays the current time in the timezone specified. `?time to [time]`- displays the time until the date/time specified",
    usage: "time [type]",
    example: "",
    status: "Ready"
};