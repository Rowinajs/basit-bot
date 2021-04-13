const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#e71a1a')
.setAuthor(`Ria Botu`)
.setDescription(`


**»**  .moderasyon \n **__Botun Moderasyon Komutlarını Görürsünüz__**\n
**»**  .genel \n **__Botun Genel Komutlarını Görürsünüz__**\n
**»**  .eğlence \n **__Botun Eğlence Komutlarını Görürsünüz__**\n
**»**  .bot \n **__Botun Komutlarını Görürsünüz__**\n
**                                                               **Coded By Rowina ✬#2015\n
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help','y','komutlar'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Yardım Menüsü.',
  usage: 'yardım'
};