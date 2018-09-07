exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var cd = 60;  //cooldown time in seconds
    if (cooldown.has(command)) {
        msg.channel.send(`I'm sorry, the **${config.prefix}${command}** command has a cooldown of **${cd}s**`);
    } else {
        request.get('http://api.icndb.com/jokes/random')
        .then(res => {msg.channel.send(res.data.value.joke)})
        .catch(err => {console.log(err)});

        cooldown.add(command);
        setTimeout(() => {
            cooldown.delete(command);
        }, cd * 1000);
    };
};

exports.help = {
    name: "chucknorris",
    category: "Fun",
    description: "Generates a random Chuck Norris joke.",
    usage: "chucknorris",
    example: "",
    status: "Ready"
};
