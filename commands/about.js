exports.run = async (client, message, args, ops) => {
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
