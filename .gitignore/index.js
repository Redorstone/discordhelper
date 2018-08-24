const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Vous surveille, !help");
    console.log("bot connected");
});

bot.login("NDc1MzU5OTk4MzU3Mjc0NjI0.DmHkww.OXJN_uTUppcZpfHHH3NWfixCH4A");
