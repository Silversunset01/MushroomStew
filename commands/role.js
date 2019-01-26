exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    var req = args.join(" ");
    var staff = config.specialRoles;
    var role = msg.guild.roles.find(r => r.name == req);
    var hasRole = msg.member.roles.find(r => r.name == req);
    if (!role) {
        msg.channel.send("I am sorry but that role does not exist. Please do **" + config.prefix + "rolelist** for a list of available roles.").catch(console.error); return;
    } else {
        if (!hasRole){
            if (staff.includes(req) === true) {
                msg.channel.send("I am sorry " + msg.author + " but you may not add the role " + req).catch(console.error);
            } else {
                msg.member.addRole(role); 
                msg.channel.send(msg.author + " you have added the role **" + req + "**").catch(console.error);
            }
        } else {
            if (staff.includes(req) === true) {
                msg.channel.send("I am sorry " + msg.author + " but you may not remove the role " + req).catch(console.error);
            } else {
                msg.member.removeRole(role); 
                msg.channel.send(msg.author + " you have removed the role **" + req + "**").catch(console.error);
            }
        };
    };
};

exports.help = {
    name: "role",
    category: "Roles",
    description: "Allows users to add/remove roles of their choosing, with the exception of staff roles. If you do not have the role when the command is run it will be added. If you already have the role it will be removed. Roles must be entered case-sensitive.",
    usage: "role [rolename]",
    example: "",
    status: "Ready"
};