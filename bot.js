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
            "value": "A simple Discord bot created by [`TotoLeFlex`](https://github.com/totocptbgn). The code is availaible on [GitHub](https://github.com/totocptbgn/FlexBotDiscord). The bot use the [Node.js](https://nodejs.org/) and [Discord.js](https://discord.js.org/) modules."
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

  // GUS Serveur, Only Music Command
  if (message.channel.id === "458358688021741579" && message.author.bot === false) {
    if (!(message.content.charAt(0) === '!')) {
      message.delete()
        .then(message => console.log(`Deleted message and replied in DM to ${message.author.username} at ${message.guild.name} in ${message.channel.name}`))
        .catch(console.error);
      message.author.send("Envoie les messages dans :loudspeaker:, que des commandes peuvent être rentrées dans :cd: !");
      console.log(`Replied getChannelId to ${message.author.username} in ${message.guild.name}`);
    }
  }
  if (message.channel.id === "398218860345688105" && message.author.bot === false) {
    if (message.content.charAt(0) === '!') {
      message.delete()
        .then(message => console.log(`Deleted message and replied in DM to ${message.author.username} at ${message.guild.name} in ${message.channel.name}`))
        .catch(console.error);
      message.author.send("La commande `" + message.content + "` doit être écrite dans :cd: !");
      console.log(`Replied getChannelId to ${message.author.username} in ${message.guild.name}`);
    }
  }

  // SAY
  if(message.content.substr(0, 8) === prefix + "say4659") {
    var sayMessage = message.content.substr(9, message.content.length);
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }

  // Youtube Player
  if (message.content.startsWith('!play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    // On récupère les arguments de la commande
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        // On envoie le stream au channel audio
        // Il faudrait ici éviter les superpositions (envoie de plusieurs vidéo en même temps)
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      });

});

client.login(process.env.BOT_TOKEN);
