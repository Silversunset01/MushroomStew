exports.run = (client, msg, args, content, cooldown, command, Discord, config, request) => {
  if (!msg.member.roles.find(r => r.name == config.headRole)) {
    msg.channel.send("You do not have permission to run this command").catch(console.error);
  } else if(typeof args[0] === 'undefined') {
    msg.channel.send("You must provide a command name to reload. `!reload <cmd>`").catch(console.error);
  } else {
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    msg.channel.send(`The command **${config.prefix}${args[0]}** has been reloaded`).catch(console.error);
    console.log(`The command ${config.prefix}${args[0]} has been reloaded`)
  }
};

exports.help = {
  name: "reload",
  category: "Admins",
  description: "Reloads the bots command to allow edits to take effect.",
  usage: "reload [command]",
  example: "",
  status: "Ready"
};