exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var cd = 30;  //cooldown time in seconds
    if (cooldown.has(command)) {
        msg.channel.send(`I'm sorry, the **${config.prefix}${command}** command has a cooldown of **${cd}s**`);
    } else {
        var usr = args[0];
        if (typeof usr === 'undefined') {
            msg.channel.send("You must enter a username").catch(console.error);
        } else {
            cooldown.add(command);
            setTimeout(() => {
                cooldown.delete(command);
            }, cd * 1000);

            request.get('https://api.mojang.com/users/profiles/minecraft/' + usr)
            .then(res => {
                var userid = res.data.id;
                var name = res.data.name;
                request.get('https://api.mojang.com/user/profiles/' + userid + '/names')
                .then(res => {
                    var nameChanges = "";
                    for (i in res.data) {
                        var cName = res.data[i].name;
                        if (typeof res.data[i].changedToAt === 'undefined') {
                            var cTime = "Original";
                        } else {
                            var xTime = res.data[i].changedToAt;
                            var cTime = new Date(xTime).toLocaleString("en-US", {timeZone: "America/New_York", month: "long", day: "2-digit", year: "numeric"});
                        };
                        nameChanges += (`**Name:** ${cName} -- **Changed on** ${cTime}\n`)
                    }
                   var embed = new Discord.RichEmbed()
                        .setTitle("**Username History for** - " + name)
                        .setURL("http://namemc.com/u/" + userid)
                        .setColor(0xC7BFE8)
                        .setTimestamp()
                        .setFooter("?nh | " + msg.author.tag)
                        .setDescription(nameChanges);
                    msg.channel.send({embed}).catch(console.error);
                }).catch(err => {console.log(err)})
            }).catch(err => {console.log(err)});
                
        };
    };
};

exports.help = {
    name: "nh",
    category: "Info",
    description: "Queries the Minecraft API and returns a users name change history",
    usage: "nh [username]",
    example: "",
    status: "Ready"
};