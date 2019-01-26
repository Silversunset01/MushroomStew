exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (!msg.member.roles.find(r => r.name == config.modRole)) {
        msg.channel.send("I'm sorry, you do not have permission for this command").catch(console.error);
    } else {
        var channelID = msg.channel.id;
        var channelName = msg.channel.name;
        msg.channel.send("**" + channelName + "** | " + channelID).catch(console.error);
    }
    
};

exports.help = {
    name: "channelinfo",
    category: "Mods",
    description: "List all channels & information related to them",
    usage: "channelinfo <channel>",
    example: "",
    status: "Ready"
};