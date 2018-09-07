const fs = require("fs");

exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (!msg.member.roles.find("name","Head Admin")) {
        msg.channel.send("You do not have permission to run this command.").catch(console.error);;
    } else {
        var req = args[0];
        
        //create command list
        var files = fs.readdirSync('./commands/');
        const commands = [];
        for (i in files) {
            var cmd = files[i];
            commands.push(cmd.replace(".js",""));
        };
        
        //if no category is listed, display generic help text
        if (typeof req === 'undefined') {
            //loop through all commands and create a list of categories
            var statuslist = [];
            for (i in commands) {
                var cmd = require("../commands/" + commands[i] + ".js");
                if (statuslist.indexOf(cmd.help.status) < 0) {statuslist.push(cmd.help.status)}
            };
            var result = "";
            for (var i = 0; i < statuslist.length; i++){
                result += ("- " + String(statuslist[i] + "\n"));
            };
            var embed = new Discord.RichEmbed()
                .setColor(0xE8DFEA)
                .setTimestamp()
                .setFooter("!cmdstatus | " + msg.author.tag)
                .setDescription(`For a list of commands type **?cmdstatus [stauts]**. \nThe categories available are: \n${result}`);
                msg.channel.send({embed}).catch(console.error);
        } else {
            //if category is listed, display all commands within
                //create embed
                var embed = new Discord.RichEmbed()
                    .setColor(0xE8DFEA)
                    .setTitle(`Command Category: **${req.toUpperCase()}**`)
                    .setTimestamp()
                    .setFooter("?help | " + msg.author.tag);
                    var cmds = "";
                    for (y in commands) {
                        var cmd = require("../commands/" + commands[y] + ".js");
                        if(cmd.help.status.toLowerCase() === req.toLowerCase()) {
                            cmds += `**${config.prefix}${cmd.help.usage}** - ${cmd.help.category}\n`
                        };
                    };
                    embed.setDescription(cmds);
                msg.channel.send({embed}).catch(console.error);
            };
    };
};

exports.help = {
    name: "cmdstatus",
    category: "HeadAdmins",
    description: "Displays all commands and their status.",
    usage: "cmdstatus",
    example: "",
    status: "Ready"
};