const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#e71a1a')
.setAuthor(`Ria Genel Komutlar`)
.setDescription(`


**»**  .avatar \n **__Avatarınızı Atar__**

**»**  .afk \n **__Afk Olduğunuzu Sebebi İle Belirtirsiniz__**\n
**»**  .say \n **__Sunucuda Olan Üyeleri Gösterir__**\n
**»**  .davet \n **__Botun Davet Linkini Alırsınız__**\n
**»**  .şifre \n **__Kişi Hakkında Bilgiler Verir__**\n
**»**  .id \n **__Etiketlediğiniz Kişinin Discord ID'sini Atar__**\n
**»**  .oylama \n **__Bir Oylama Başlatır__**\n
**»**  .çekiliş  \n **__Bir Çekiliş Başlatır__**\n
**»**  .emoji-ekle  \n **__Bağlantısını Verdiğiniz Resmi Sunucuya Emoji Olarak Eklemenizi Sağlar__**\n
**»**  .nuke \n **__Komutu Yazdığınız Kanalı Siler Tekrar Oluşturur__**\n

**                                                               **Coded By Rowina ✬#2015\n
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['general','g','genelkomutalar'], 
  permLevel: 0
};

exports.help = {
  name: "genel",
  description: 'Genel Menüsü.',
  usage: 'genel'
};