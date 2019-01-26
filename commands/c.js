exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var temp = args[0];
    var newtemp = Math.round((temp - 32) / 1.8);
    if (typeof temp === 'undefined') {
        msg.channel.send("Please input a temperature to convert!").catch(console.error);
    } else msg.channel.send(temp + "°F = " + newtemp + "°C").catch(console.error);
};

exports.help = {
    name: "c",
    category: "Math",
    description: "Displays the entered temperature in celsius",
    usage: "c [temp]",
    example: "",
    status: "Ready"
};