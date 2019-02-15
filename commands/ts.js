exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    msg.channel.send("Test command!").catch(console.error);    
};

exports.help = {
    name: "ts",
    category: "Admins",
    description: "Test Command..for testing",
    usage: "ts",
    example: "",
    status: "Ready"
};