exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var q = args[0];
    if (typeof q === 'undefined') {
        msg.channel.send("I would answer, but you did not ask a question!").catch(console.error);; 
    } else {
        var rnd = Math.floor((Math.random() * 20) + 1);
        switch(rnd) {
            case 1: var ans = "It is certain."; break;
            case 2: var ans = "As I see it, yes." ; break;
            case 3: var ans = "Reply hazy, try again." ; break;
            case 4: var ans = "Don't count on it."; break;
            case 5: var ans = "It is decidedly so." ; break;
            case 6: var ans = "Most Likely." ; break;
            case 7: var ans = "Ask again later." ; break;
            case 8: var ans = "My reply is no." ; break;
            case 9: var ans = "Without a doubt." ; break;
            case 10: var ans = "Outlook good." ; break;
            case 11: var ans = "Better not tell you now." ; break;
            case 12: var ans = "My sources say no." ; break;
            case 13: var ans = "Yes - definitely." ; break;
            case 14: var ans = "Yes." ; break;
            case 15: var ans = "Cannot predict now." ; break;
            case 16: var ans = "Outlook not so good." ; break;
            case 17: var ans = "You may rely on it." ; break;
            case 18: var ans = "Signs point to yes." ; break;
            case 19: var ans = "Concentrate and ask again." ; break;
            case 20: var ans = "Very doubtful." ; break;
            default: var ans = "I don't think that worked." ; break;
        };
        msg.channel.send("🎱 " + msg.author + "** asked:** " + content + "\n**The 8-ball says:** " + ans).catch(console.error)
    }
};

exports.help = {
    name: "8ball",
    category: "Fun",
    description: "Asks the Magic 8 Ball a question! What will the answer be?",
    usage: "8ball [question]",
    example: "",
    status: "Ready"
};