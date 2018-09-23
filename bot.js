const Discord = require('discord.js');
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
      .then(message => console.log(`Deleted message and replied .about to ${message.author.username} at ${message.guild.name} in ${message.channel.name}`))
      .catch(console.error);
  }

  //  HI
  if (message.content === prefix + 'hi') {
    message.channel.send("Hi, " + message.author.toString() + ". :smile:")
    console.log(`Replied hi to ${message.author.username} in ${message.guild.name}`);
  }

  // COMMANDS
  if (message.content === prefix + 'commands') {
    message.channel.send("Sorry " + message.author.toString() + ", but `.commands` is unavailaible at the time... :confused:");
    console.log(`Replied hi to ${message.author.username} in ${message.guild.name}`);
  }

  // TEST
  if (message.content === prefix + 'getChannelId') {
    message.channel.send("Ok " + message.author.toString() + ", the text channel Id is " + message.channel.id + " !")
    console.log(`Replied getChannelId to ${message.author.username} in ${message.guild.name}`);
  }

  // GUS server no music
  if (message.content === prefix + 'test') {
    if (message.channel.id === 458358688021741579) {
      message.channel.send("Ok " + message.author.toString() + ", don't fuck with the Gus's Music channel !")
      console.log(`Replied getChannelId to ${message.author.username} in ${message.guild.name}`);
    } else {
      message.channel.send("Uhh " + message.author.toString() + ", you're not at the right place... :confused:")
      console.log(`Replied getChannelId to ${message.author.username} in ${message.guild.name}`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
