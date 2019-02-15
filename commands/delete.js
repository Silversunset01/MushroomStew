exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (msg.member.roles.find(r => r.name == config.headRole) || msg.author.id == config.owner) {
        var amt = args[0];
        if (typeof amt === 'undefined') {
            msg.channel.send("You need to provide an amount to delete!").catch(console.error);;
        } else {
            msg.channel.bulkDelete(amt).then(messages => console.log(`Bulk deleted ${messages.size} messages`)).catch(console.error);
        }
    } else msg.channel.send("I'm sorry, you do not have permission for this command").catch(console.error);;
    
};

exports.help = {
    name: "delete",
    category: "Admins",
    description: "Deletes messages from a channel. Currently restricted to the Admin role & bot owner for testing reasons, and requires the bot to have the 'Manage Messages' permission.",
    usage: "delete [#]",
    example: "",
    status: "Ready"
};