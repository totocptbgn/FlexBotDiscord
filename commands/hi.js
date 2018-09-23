exports.run = async (client, message, args, ops) => {
    message.channel.send("Hi, " + message.author.toString() + ". :smile:")
    .then(msg => console.log(`Replied hi to ${msg.author.username} in ${msg.guild.name}`))
    .catch(console.error);
}
