exports.run = (client, member) => {
  //log new user
  var joinTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short", weekday: "short", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'});
  client.channels.find("name", "join-logs").send(`✅ **${member.user.tag}** has joined the server ${joinTime}`).catch(console.error);
 
  //add default role
  member.addRole(member.guild.roles.find(role => role.name === "Nerds"));
  
  //var role = member.guild.roles.find("name", "Nerds"); 
  //member.addRole(role);
    
 
  }