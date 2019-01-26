exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (!msg.member.roles.find(r => r.name == config.modRole)) {
        msg.channel.send("I'm sorry, you do not have permission for this command").catch(console.error);
    } else {
        var now = new Date().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short", weekday: "short", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'});

        var roles = msg.guild.roles.array();

        for (r in roles) {
                if (roles[r].name !== "Nerds" || !roles[r].name !== "@everyone" || !roles[r].name !== "Nerdbot" || !roles[r].name !== "Justice") {
                    roles[r].setMentionable(true).catch(console.error);
                };
        };
        msg.guild.channels.find(c => c.name == config.logs).send(`🔔 **${msg.member.displayName}** has enabled role mentions ${now}`).catch(console.error);   
    };
};

exports.help = {
    name: "allowping",
    category: "Mods",
    description: "Enables @role mentions for all user roles.",
    usage: "denyping",
    example: "",
    status: "Ready"
};