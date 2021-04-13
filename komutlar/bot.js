const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#e71a1a')
.setAuthor(`Ria Bot Komutları`)
.setDescription(`


**»**  .git \n **__Etiketlediğiniz Kişinin Sesli Sohbetine Katılırsınız__**

**»**  .gel \n **__Etiketlediğiniz Kişiyi Sesli Sohbetinize Çekersiniz__**\n
**»**  .kes \n **__Etiklediğiniz Kişiyi Sesli Sohbetten Atarsınız__**\n
**»**  .davet \n **__Botun Davet Linkini Alırsınız__**\n
**»**  .sunucu-kur \n **__Otomatik Olarak Sunucu Kurur__**\n
**»**  .osmanlı-bilgi \n **__Osmanlı Hakkında Bilgiler Verir__**\n
**»**  .kısalt \n **__Kopyaladığınız Linki Kısaltır__**\n
**»**  .hava-durumu \n **__Yazdığınız Şehrin Hava Durumunu Gösterir__**\n
**»**  .istatistik \n **__Bot Hakkında Verilere Ulaşırsınız__**\n
**»**  .ping \n **__Botun Gecikme Süresini Gösterir__**\n
**»**  .atatürk \n **__Atamızın Resmini Atar__**\n
**»**  .destek \n **__Botun Destek Sunucusunun Davetini Alırsınız__**\n
**                                                               **Coded By Rowina ✬#2015\n
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bot','b','botkomutaları'], 
  permLevel: 0
};

exports.help = {
  name: "bot",
  description: 'Bot Menüsü.',
  usage: 'bot'
};