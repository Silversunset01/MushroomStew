const config = require("../config.json");
exports.run = (client, member) => {
  //log new user
  var joinTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short", weekday: "short", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'});
  
  client.channels.find(c => c.name == config.joinLogs).send(`✅ **${member.user.tag}** has joined the server ${joinTime}`).catch(console.error);
 
  //add default role
  member.addRole(member.guild.roles.find(role => role.name === config.defaultRole));

    
 
  }