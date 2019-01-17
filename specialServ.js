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
