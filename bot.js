const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log("⚡⚡⚡ Bot deployed succesfully and ready to work. ⚡⚡⚡");
});

client.on('message', message => {
  var prefix = ".";

  // ABOUT
  if (message.content === prefix + 'about') {
    message.channel.send({
      "embed": {
        "title": ":fox:",
        "color": 12390624,
        "footer": {
          "icon_url": message.author.avatarURL,
          "text": ".about requested by " + message.author.username +"."
        },
        "fields": [
          {
            "name": "About me :",
            "value": "A simple Discord bot created by [`TotoLeFlex`](https://github.com/totocptbgn). The code is availaible on [GitHub](https://github.com/totocptbgn/TotoBotFriend/blob/master/bot.js). The bot use the [Node.js](https://nodejs.org/) and [Discord.js](https://discord.js.org/) modules."
          },
          {
            "name": "Add it to another server !",
            "value": "If you want to add the bot to your Discord server, click [`here`](https://discordapp.com/oauth2/authorize?client_id=493100279902896139&scope=bot&permissions=8) !"
          },
          {
            "name": "Commands :",
            "value": "To use the bot, use the `.` prefix. Type `.commands` to get the list of the commands."
          }
        ]
      }
    });
    message.delete()
      .then(msg => console.log(`Deleted message and replied .about to ${msg.author.username} at ${msg.guild.name} in ${msg.channel.name}`))
      .catch(console.error);
  }

  //  HI
  if (message.content === prefix + 'hi') {
    message.channel.send("Hi, " + message.author.toString() + ". :smile:")
    .then(msg => console.log(`Replied hi to ${msg.author.username} in ${msg.guild.name}`))
    .catch(console.error);
  }

  // COMMANDS
  if (message.content === prefix + 'commands') {
    message.channel.send("Sorry " + message.author.toString() + ", but `.commands` is unavailaible at the time... :confused:")
    .then(msg => console.log(`Replied hi to ${msg.author.username} in ${msg.guild.name}`))
    .catch(console.error);
  }

  // MUSIC
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  if (!message.content.startsWith(prefix)) return;

  let commandFile = require(`./${cmd}.js`)
  commandFile.run(client, message, args);
});


client.login(process.env.BOT_TOKEN);
