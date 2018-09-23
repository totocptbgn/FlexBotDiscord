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
      .setDescription("I'm a bot created by totoLeFlex#9103.\n Use the prefix '.' to use me.\n List of the command :\n - .about\n - .hi");
    message.channel.send(embed);
    message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
  }

  //  HI
  if (message.content === prefix + 'hi') {
    message.channel.send("Hi, " + message.author.toString() + ".")
    .then(msg => console.log(`Replied hi to ${msg.author.username}`))
    .catch(console.error);
  }

});

client.login(process.env.BOT_TOKEN);
