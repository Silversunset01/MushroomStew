exports.run = (client, message) => {
    if (message.author.bot) return;
    if (message.content.includes("https://discord.gg/")){
        message.delete().catch(console.error);

        message.author.send(`I have deleted your link from ${message.channel}, per our rules here <http://nerd.nu/rules> we do not allow advertising other servers. If you feel this is an error please contact a Head Admin.`).catch(console.error);
    };
   
};