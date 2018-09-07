exports.run = (client, msg, args, content) => {
    var miles = args[0];
    if (typeof miles === 'undefined') {
        msg.channel.send("Please input a distance to convert!").catch(console.error);
    } else {
        if (isNaN(miles)){
            msg.channel.send("Please enter a number").catch(console.error);
        } else {
            msg.channel.send(miles + " miles = " + Math.round(miles * 1.6) + " kilometers").catch(console.error);
        };
    };
};

exports.help = {
    name: "km",
    category: "Math",
    description: "Converts the entered miles to kilometers",
    usage: "km [distance in miles]",
    example: "",
    status: "Ready"
};