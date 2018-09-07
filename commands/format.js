exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var embed = new Discord.RichEmbed()
        .setColor(0xff0000)
        .setTimestamp()
        .setFooter("?format | " + msg.author.tag)
        .addField("Discord Markdown Formatting", "Discord uses Markdown formatting for its messages. \n[Click here](https://support.discordapp.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-) for formatting info!");		
    msg.channel.send({embed}).catch(console.error);;
};

exports.help = {
    name: "format",
    category: "Info",
    description: "Provides information about Discord Markdown Formatting",
    usage: "format",
    example: "",
    status: "Ready"
};