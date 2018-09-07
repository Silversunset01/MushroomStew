const config = require("../config.json");
exports.run = (client, msg, args, content) => {
    if (!msg.member.roles.find("name","Head Admin")) {
        msg.channel.send("You do not have permission to run this command").catch(console.error);
    } else {
        console.log("Stopping the bot");
        process.exit(0);
    }
};

exports.help = {
    name: "restart",
    category: "HeadAdmins",
    description: "Restarts the bot (provided the auto-run script hasn't crashed). Currently this is restricted to the owner of the bot.",
    usage: "restart",
    example: "",    
    status: "Ready"
};