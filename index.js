const Discord = require ('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Ready!");
})

var bannedwords = "doggie,dog".split(",");

client.on("message", msg => {
    if(msg.guld === null) return;

    for (i=0;i<bannedwords.length;i++) {
        if (msg.content.toLowerCase().includes(bannedwords[i])) {
            msg.delete();
            msg.reply("**Tidak boleh begitu bro**");
            return;
        }
    }
})

client.login("Nzk2NTg0ODI1OTU0NzYyODAz.X_aDbg.9YKfxp7U3QHYpKi_gHZaJpYFd5A")