exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var embed = new Discord.RichEmbed()
        .setTitle("**Nerd.nu Information**")
        .setColor(0x992d22)
        .setAuthor(client.user.tag, client.user.avatarURL)
        .addField("Handy links for you from Nerd.nu!", `
Forums: https://nerd.nu/forums/
Subreddit: https://www.reddit.com/r/mcpublic/
Rules: https://nerd.nu/rules
Staff List: https://nerd.nu/staff
NerdBot Selfies: https://imgur.com/a/LkDLr
Discord Invite: https://discord.gg/dKFfHY3
Mumble Download: http://mumble.sourceforge.net/
Mumble Connection: server: mumble.nerd.nu | port: 6162 (voice chat)
        `)
        .setTimestamp()
        .setFooter(config.prefix + "nerdnu | " + msg.author.tag);					
    msg.channel.send({embed}).catch(console.error);
    
};

exports.help = {
    name: "nerdnu",
    category: "Info",
    description: "Displays various links & information for the Nerd.nu Gaming Community.",
    usage: "nerdnu",
    example: "",
    status: "Ready"
};