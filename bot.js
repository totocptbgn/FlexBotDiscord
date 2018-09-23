const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log("Bot deployed succesfully and ready to work.");
});

client.on('message', message => {
  var prefix = ".";

  // ABOUT
  if (message.content === prefix + 'about') {
    message.channel.send({
      "embed": {
        "title": " ⚡ Who am I ?",
        "color": 12390624,
        "footer": {
          "icon_url": message.author.avatarURL,
          "text": "`.about` requested by " + message.author.username +"."
        },
        "fields": [
          {
            "name": "About me :",
            "value": "A simple Discord bot created by [`TotoLeFlex`](https://github.com/totocptbgn). The code is availaible on [GitHub](https://github.com/totocptbgn/TotoBotFriend/blob/master/bot.js). The bot use the [Node.js](https://nodejs.org/) and [Discord.js](https://discord.js.org/) modules."
          },
          {
            "name": "Add it to another server !",
            "value": "If you want to add the bot to your Discord server, click [`here`](https://discordapp.com/oauth2/authorize?client_id=493100279902896139&scope=bot&permissions=0) !"
          },
          {
            "name": "Commands :",
            "value": "To use the bot, use the `.` prefix. Type `.commands` to get the list of the commands."
          }
        ]
      }
    });
    message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username} in ${msg.guild.name}`))
      .catch(console.error);
  }

  //  HI
  if (message.content === prefix + 'hi') {
    message.channel.send("Hi, " + message.author.toString() + ".")
    .then(msg => console.log(`Replied hi to ${msg.author.username} in ${msg.guild.name}`))
    .catch(console.error);
  }

});

client.login(process.env.BOT_TOKEN);
