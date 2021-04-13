const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#e71a1a')
.setAuthor(`Ria Moderasyon Komutları`)
.setDescription(`


**»**  .kanal-koruma aç/kapat \n **__Kanalı Korumanızı Sağlar__**

**»**  .reklam-engel aç/kapat \n **__Sunucuda Reklamı Yasaklar__**\n
**»**  .rol-koruma aç/kapat \n **__Sunucunuzda ki Rolleri Korumanızı Sağlar__**\n
**»**  .küfür-engel aç /kapat \n **__Sunucunuzda Küfürleri Yasaklar__**\n
**»**  .ban \n **__Etiketlediğiniz/ID'sini belirttiğiniz Kişiyi Sunucudan Yasaklar__**\n
**»**  .unban \n **__ID'sini belirttiğiniz Kişinin Sunucudan Yasağını Kaldırırsınız__**\n
**»**  .capslock-engelle /kapat \n **__Sunucuda Büyük Harfi Yasaklar__**\n
**»**  .sohbet-aç/kapat \n **__Komudu Kullandığınız Kanalı Kitler/Açar__**\n
**»**  .uyarı \n **__Etiketlediğiniz Kişiyi Sebebi İle Uyarır__**\n
**                                                               **Rowina ✬#2015\n
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['moderasyon','m','moderasyonkomutaları'], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: 'Moderasyon Menüsü.',
  usage: 'moderasyon'
};  