const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    var strLen = 900;
    var guild = newMessage.guild.id;

    if (oldMessage.content.length > strLen) {
        var oldtext = "***Content truncated due to length*** - " + oldMessage.content.substr(0,strLen)
    } else {
        var oldtext = oldMessage.content
    };

    if (newMessage.content.length > strLen) {
        var newtext = "***Content truncated due to length*** - " + newMessage.content.substr(0,strLen)
    } else {
        var newtext = newMessage.content
    };
    
    var embed = new Discord.RichEmbed()
        .setColor(0xFFD700)
        .setTimestamp()
        .setTitle(`✏ **Message Edited** ✏`)
        .setDescription(`**Edited By:** ${newMessage.author.tag}\n**Channel:** ${newMessage.channel}`)
        .addField("Old Message", `${oldtext}`)
        .addField("New Message", `${newtext}`);

        

    client.guilds.find(i => i.id == guild).channels.find(c => c.name == config.editLogs).send({embed}).catch(console.error);

};
