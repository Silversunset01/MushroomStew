exports.run = (client, msg, args, content) => {
    var temp = args[0];
    var newtemp = Math.round((temp * 1.8) + 32);
    if (typeof temp === 'undefined') {
        msg.channel.send("Please input a temperature to convert!").catch(console.error);
    } else msg.channel.send(temp + "°C = " + newtemp + "°F").catch(console.error);
};

exports.help = {
    name: "f",
    category: "Math",
    description: "Displays the entered temperature in farenheit",
    usage: "f [temp]",
    example: "",
    status: "Ready"
};