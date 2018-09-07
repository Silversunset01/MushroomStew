exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var cd = 60; //cooldown time in seconds
    if (cooldown.has(command)) {
        msg.channel.send(`I'm sorry, the **${config.prefix}${command}** command has a cooldown of **${cd}s**`);
    } else {
        request.get('https://icanhazdadjoke.com/slack')
        .then(res => {msg.channel.send(res.data.attachments[0].text)})
        .catch(err => {console.log(err)});

        cooldown.add(command);
        setTimeout(() => {
            cooldown.delete(command);
        }, cd * 1000);
    };
};

exports.help = {
    name: "dadjoke",
    category: "Fun",
    description: "Generates a random dad joke.",
    usage: "dadjoke",
    example: "",
    status: "Ready"
};