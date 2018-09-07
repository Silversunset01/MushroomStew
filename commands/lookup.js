exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (msg.member.roles.find("name", "Moderator")) {
        var usr = args[0];
        if (typeof usr === 'undefined') {
            msg.channel.send("You must enter a username").catch(console.error);
        } else {
            request.get('https://api.mojang.com/users/profiles/minecraft/' + usr)
            .then(res => {
                var userid = res.data.id;
                var name = res.data.name;
                var embed = new Discord.RichEmbed()
                        .setTitle("**User Notes/Bans** - " + name)
                        .setURL("http://mcbouncer.com/u/" + userid)
                        .setColor(0xC7BFE8)
                        .setTimestamp()
                        .setFooter("?lookup | " + msg.author.tag)
                    request.get('https://mcbouncer.com/api/v2/bans/?server=c.nerd.nu&user_id=' + userid)
                    .then(res => {
                        for (i in res.data.data) {
                            var banner = res.data.data[i].issuer_username;
                            var banas = res.data.data[i].banned_as;
                            var time = res.data.data[i].time_banned;
                            var reason = res.data.data[i].reason;
                            embed.addField("⛔ " + banas + " banned by " + banner + " on " + time,reason);
                        }
                    }).catch(err => {console.log(err)});
                    request.get('https://mcbouncer.com/api/v2/notes/?server=c.nerd.nu&user_id=' + userid)
                    .then(res => {
                        var count = res.data.count;
                        var notes = res.data.data;
                        var i; 
                        var note = "";
                        for (i in res.data.data) {
                            var note = res.data.data[i].note;
                            var issuer = res.data.data[i].issuer_username;
                            var num = res.data.data[i].note_id;
                            var date = res.data.data[i].time_added;
                            embed.addField("⚠ #"+ num + " from " + issuer + " on " + date, note)
                        }
                        msg.channel.send({embed}).catch(console.error);
                    }).catch(err => {console.log(err)})
                })
            .catch(err => {console.log(err)})
        }
    } else msg.channel.send("I'm sorry, you do not have permission for this command").catch(console.error); 
};

exports.help = {
    name: "lookup",
    category: "Mods",
    description: "Performs a lookup using MCBouncer.com and returns a users bans/notes in Minecraft. MCBouncer is a public resource hosted by Deaygo to control user bans and information for Minecraft servers.",
    usage: "lookup [username]",
    example: "",
    status: "Ready"
};