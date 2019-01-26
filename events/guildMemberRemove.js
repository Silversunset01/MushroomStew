const config = require("../config.json");
exports.run = (client, member) => {
    var leaveTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York", timeZoneName: "short", weekday: "short", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'});

    client.channels.find(c => c.name == config.joinLogs).send(`🚫 **${member.user.tag}** has left the server ${leaveTime}`).catch(console.error);
  }