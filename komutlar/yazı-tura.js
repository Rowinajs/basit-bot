const Discord = require('discord.js')

exports.run = (client, message) => {
let a = ["https://cdn.discordapp.com/attachments/755336348017098823/759015459357327370/yazi.png","https://cdn.discordapp.com/attachments/755336348017098823/759015453753344010/tura.png"]
let b =   Math.floor(Math.random() * (a.length) + 0);
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(a[b])
)
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yazı-tura'],
  permLevel: 0
};

exports.help = {
name: 'yazıtura'
 };