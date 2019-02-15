exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (!msg.member.roles.find(r => r.name == config.headRole)) {
        msg.channel.send("You do not have permission to run this command").catch(console.error);
    } else {
        console.log("Stopping the bot");
        process.exit(0);
    }
};

exports.help = {
    name: "restart",
    category: "Admins",
    description: "Restarts the bot (provided the auto-run script hasn't crashed). Currently this is restricted to the owner of the bot.",
    usage: "restart",
    example: "",    
    status: "Ready"
};