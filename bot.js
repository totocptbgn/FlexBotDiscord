const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log("Done.");
});

client.on('message', message => {
  var prefix = ".";

  // ABOUT
  if (message.content === prefix + 'about') {
    const embed = new RichEmbed()
      .setTitle('About :')
      .setColor(0x61039A)
      .setTimestamp()
      .setDescription("I'm a bot created by totoLeFlex#9103.\n Use the prefix '.' to use me.\n List of the command :\n - .about\n - .hi\n - .tg");
    message.channel.send(embed);
    message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
  }

  //  HI
  if (message.content === prefix + 'hi') {
    message.channel.send("Hi, " + message.author.toString() + ".");
  }

  // TG
  if (message.content === prefix + 'tg') {
    message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
    message.channel.send("Ferme ta gueule ! :joy:");
  }

  if (message.content === prefix + 'testGit2') {
    message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
    message.channel.send("Le Bot à bien été mis à jour pars GitHub.");
  }

});

client.login(process.env.BOT_TOKEN);
