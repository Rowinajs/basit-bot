const { MessageEmbed } = require("discord.js");
//
module.exports.run = (client, message, args) => {
//  
  if(!['791418093989265434'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.`))


  let tag = "TAG";
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('BLACK')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`**Toplam Üye  ・ ${toplam}
  Sesteki Üye ・${ses}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}
