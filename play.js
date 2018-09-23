const ytdl = require('ytdl-core');
var opus = require('node-opus');

exports.run = async (client, message, args, ops) => {
  // MUSIC
  if (!message.author.voiceChannel) return message.channel.send("Sorry " + message.author.toString() + ", but your are not in a voice channel :confused:");
  if (!message.guild.me.voiceChannel) return message.channel.send("Sorry " + message.author.toString() + ", I'm already connected to the voice channel ! :thinking:");
  if (!args[0]) return message.channel.send("Sorry " + message.author.toString() + ", please put a valid URL ! :thinking:");
  let validate = await ytdl.validateURL(args[0]);
  if (!validate) return message.channel.send("Sorry " + message.author.toString() + ", please put a valid URL ! :thinking:");
  let info = await ytdl.getInfo(args[0]);
  let connection = await message.member.voiceChannel.join();
  let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly'}));
  message.channel.send(`Now playing: ${info.title}`);
}
