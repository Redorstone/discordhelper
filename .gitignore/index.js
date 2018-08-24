const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Vous surveille, !help");
    console.log("bot connected");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split("!");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.chanel.send("test1");
        break;
    }
});

bot.login(process.env.TOKEN);
