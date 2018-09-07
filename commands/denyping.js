exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (!msg.member.roles.find("name","Moderator")) {
        msg.channel.send("I'm sorry, you do not have permission for this command").catch(console.error);
    } else {
        var now = new Date().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short", weekday: "short", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'});

        var roles = msg.guild.roles.array();

        for (r in roles) {
                if (roles[r].name !== "Nerds" || !roles[r].name !== "@everyone" || !roles[r].name !== "Nerdbot") {
                    roles[r].setMentionable(false).catch(console.error);
                };
        };
        msg.guild.channels.find("name","logs").send(`🔕 **${msg.member.displayName}** has suspended role mentions ${now}`).catch(console.error);   
    };
};

//for !help command (mandatory or the bot will error!)
exports.help = {
    name: "denyping",
    category: "Mods",
    description: "Disables @role mentions for all user roles.",
    usage: "denyping",
    example: "",
    status: "Ready"
};