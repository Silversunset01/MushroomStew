exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var roles = msg.guild.roles.map(r=>r.name).sort();
    var rmroles = config.specialRoles;
    for (i in rmroles) {
        var ct = roles.indexOf(rmroles[i]);
        roles.splice(ct, 1)
    };
    var result = "";
    for (var j = 0; j < roles.length; j++){
        result += ("- " + String(roles[j] + "\n"));
    };
    var embed = new Discord.RichEmbed()
        .setTitle("**Role Info**")
        .setColor(0xE8DFEA)
        .addField("The roles you are currently allowed to choose from are:", result + "\n\n**To add or remove a role type** " + config.prefix + "role <name>\n**To list all users in a role type** " + config.prefix + "roleinfo <name>\n*make sure to use the case-sensitive item from above!*");
    msg.channel.send({embed}).catch(console.error);
    
};

exports.help = {
    name: "rolelist",
    category: "Roles",
    description: "Displays all roles that you are allowed to self-apply.",
    usage: "rolelist",
    example: "",
    status: "Ready"
};