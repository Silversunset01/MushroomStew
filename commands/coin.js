exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var rnd = Math.floor((Math.random() * 2) + 1);
    if (rnd === 1) {
        var ans = "heads";
    } else {
        var ans = "tails";
    };
    msg.channel.send(`${msg.author}, the coin has come up ${ans}`).catch(console.error);
};

exports.help = {
    name: "coin",
    category: "Fun",
    description: "Flip a coin, will it come up heads or tails?!",
    usage: "coin",
    example: "",
    status: "Ready"
};