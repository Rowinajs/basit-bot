const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#e71a1a')
.setAuthor(`Ria Eğlence Komutları`)
.setDescription(`


**»**  .balık-tut \n **__Gölden Balık Avlar__**

**»**  .kar-topu \n **__Etiketlediğiniz Kişiye Kar Topu Fırlatırsınız__**\n
**»**  .kutu.aç \n **__Kutu Açarsınız__**\n
**»**  .soygun-yap \n **__Banka Soygunu Yaparsınız__**\n
**»**  .adam-asmaca \n **__Adam Asmaca Oyununu Oynarsınız__**\n
**»**  .şut-çek \n **__Şut Çekersiniz__**\n
**»**  .slots \n **__Çark Çevirirsiniz__**\n
**»**  .tokat-at \n **__Etiketlediğiniz Kişiye Tokat Atarsınız__**\n
**»**  .zar-at \n **__Zar Atarsınız Random Sayılar Gelir__**\n
**»**  .fal \n **__Falınıza Bakar__**\n
**»**  .fbi \n **__Fbi Gifi Atar__**\n
**»**  .ağla \n **__Botu Ağlatırsınız__**\n
**»**  .eject \n **__Etiketlediğiniz Kişiyi Among Us'da Asarsınız__**\n
**»**  .sitres-çarkı \n **__Sitres Çarkı Çevirirsiniz__**\n
**»**  .kasa-aç \n **__Cs:Go Kasa Açarsınız__ **

**»**  .boks-makinesi \n **__Boks Makinesine Vurursunuz__ **

**»**  .tokat-at \n **__Etiketlediğiniz Kişiye Tokat Atarsınız__**\n
**»**  .yazı-tura \n **__Yazı Tura Yaparsınız__**\n
                                                          Rowina ✬#2015
`)
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['eğlence','e','eğlencekomutaları'], 
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: 'Eğlence Menüsü.',
  usage: 'eğlence'
};