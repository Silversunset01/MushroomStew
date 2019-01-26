exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
    if (msg.member.roles.find(r => r.name == config.headRole)) {
        var user = msg.mentions.members.first();                //mentioned user
        var rolereq = args.slice(1, args.length);
        var req = rolereq.join(" ");
        var role = msg.guild.roles.find(r => r.name == req);       //find role by name
        var hasRole = user.roles.find(r => r.name == req);   //check if user has the role or not
        //console.log(`${role} ----> ${user}`);

        if (!role) {
            msg.channel.send("I am sorry but that role does not exist. Please do **" + config.prefix + "rolelist** for a list of available roles.").catch(console.error); return;
        } else {
            if (!hasRole){
                    user.addRole(role).catch(console.error); 
                    msg.channel.send(`${msg.author} you have added the role ${req} to ${user}`).catch(console.error);
                } else {
                    user.removeRole(role).catch(console.error); 
                    msg.channel.send(`${msg.author} you have removed the role ${req} from ${user}`).catch(console.error);
                }
            };
        } else {
            msg.channel.send("You do not have permission for this command").catch(console.error);
        }
};

exports.help = {
    name: "headrole",
    category: "HeadAdmins",
    description: "Allows head admins to apply roles to users.",
    usage: "headrole @username [rolename]",
    example: "",
    status: "Ready"
};