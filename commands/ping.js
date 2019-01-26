exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    msg.channel.send("pong!").catch(console.error);
}

exports.help = {
    name: "ping",
    category: "Info",
    description: "Pings the bot. For real.",
    usage: "ping",
    example: "",
    status: "Ready"
};