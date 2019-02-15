exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (!msg.member.roles.find(r => r.name == config.modRole)) {
        msg.channel.send("I'm sorry, you do not have permission for this command").catch(console.error);
    } else {
        var input = args[0];
        if (typeof input == 'undefined'){
            var channelID = msg.channel.id;
            var channelName = msg.channel.name;
            var channelCreated = msg.channel.createdAt;
            var channelType = msg.channel.type;
        } else {
            var myChannel = client.channels.find(c => c.name == input);
            var channelID = myChannel.id;
            var channelName = myChannel.name;  
            var channelCreated = myChannel.createdAt;
            var channelType = myChannel.type;         
        }

        //create embed
        var embed = new Discord.RichEmbed()
            .setColor(0x008000)
            .setTimestamp()
            .setFooter(config.prefix + "channelinfo")
            .setDescription(`
__**Channel Information**__
**Channel Name: ** ${channelName}
**Channel ID: ** ${channelID}
**Channel Created: ** ${channelCreated}
**Channel Type: ** ${channelType}
            `)
        msg.channel.send({embed}).catch(console.error);



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