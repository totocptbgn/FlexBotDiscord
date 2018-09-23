exports.run = async (client, message, args, ops) => {

    message.channel.send("Sorry " + message.author.toString() + ", but `.commands` is unavailaible at the time... :confused:")
    .then(msg => console.log(`Replied hi to ${msg.author.username} in ${msg.guild.name}`))
    .catch(console.error);
}
