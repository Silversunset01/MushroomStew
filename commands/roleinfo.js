const Discord = require("discord.js");
exports.run = (client, msg, args, content) => {
    var input = args.join(" ");
    if (typeof input === 'undefined') {
        msg.channel.send("Please input a valid role name").catch(console.error);
    } else {
        var role = msg.guild.roles.find("name", input);
        if (role === null) {
            msg.channel.send("Please input a valid role name").catch(console.error);
        } else {
            var list = role.members.map(m=>m.user.tag).sort();
            var result = "";
            for (var i = 0; i < list.length; i++){
                result += ("- " + String(list[i] + "\n"));
            };
            var embed = new Discord.RichEmbed()
                .setTitle("**Role Info**")
                .setColor(role.color)
                .setAuthor(client.user.tag, client.user.avatarURL)
                .addField("Name", role.name, true)
                .addField("Hoisted", role.hoist, true)
                .addField("Users", `${result}`)
                .setTimestamp()
                .setFooter("?rolinfo | " + msg.author.tag);					
            msg.channel.send({embed}).catch(console.error);
        };
    };
};

exports.help = {
    name: "roleinfo",
    category: "Roles",
    description: "Displays information about the entered role, including a list of users.",
    usage: "roleinfo [role name]",
    example: "",
    status: "Ready"
};