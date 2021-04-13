const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;
module.exports.run = async (client, message, args) => {

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
          
if(!message.member.roles.cache.has(ayarlar.JailYetkilisi) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.')
  
  const kişi = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send('**Onaylamam gereken kişiyi belirt.**')
  if(kişi.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('Etiketlenen Kullanıcı Sizden Üst/Aynı Pozisyonda.')
  
  message.react('✅')
  
 
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
 
        
  
  const embed = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
  .setDescription(`<@${kişi.id}> (\`${kişi.id}\`) üyesi sunucuda onaylandı.\n\n• Yetkili: <@${message.author.id}> (\`${message.author.id}\`)\n\n• Kanal: \`${message.channel.name}\``)
  
 
  //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  kişi.roles.set(["800088292711202857"]);
  message.guild.channels.cache.get("800117893106106448").send(embed)

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['onay'],
    permLevel: 0,
}

exports.help = {
      name: "onay"  
  
}