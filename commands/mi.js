exports.run = (client, msg, args, content) => {
    var km = args[0];
    if (typeof km === 'undefined') {
        msg.channel.send("Please input a distance to convert!").catch(console.error);
    } else {
        if (isNaN(km)){
            msg.channel.send("Please enter a number").catch(console.error);
        } else {
            msg.channel.send(km + " kilometers = " + Math.round(km / 1.6) + " miles").catch(console.error);
        };
    };
};

exports.help = {
    name: "mi",
    category: "Math",
    description: "Converts the entered kilometers to miles",
    usage: "mi [distance in kilometers]",
    example: "",
    status: "Ready"
};