exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var num = args[0];
    if (isNaN(parseInt(num)) || num < 1 || num > 10000) {
        msg.channel.send("You must enter a number between 1 and 10,000").catch(console.error);
    } else {
        var rnd = Math.floor((Math.random() * num) + 1);
        msg.channel.send(`${msg.author} has rolled a ${rnd.toLocaleString()}`).catch(console.error);
    }; 
};

exports.help = {
    name: "roll",
    category: "Fun",
    description: "Generates a random number between 1 and [your input]. You must input a number!",
    usage: "roll [#]",
    example: "",
    status: "Ready"
};