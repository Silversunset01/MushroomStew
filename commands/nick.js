exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var nick = args.join(" ");

    msg.guild.channels.find("name","nickname-logs").send(`⚠ **${msg.author.tag}** Changed their nickname from  **${msg.member.displayName}** to **${nick}**`).catch(console.error);
   
    msg.member.setNickname(nick).catch(console.error);

};

//for !help command (mandatory or the bot will error!)
exports.help = {
    name: "nick",
    category: "Info",
    description: "Set a new nickname for yourself.",
    usage: "nick [new nickname]",
    example: "",
    status: "Ready"
};