const Discord = require("discord.js");

exports.run = (client, message) => {

let motion = new Discord.MessageEmbed()
  
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField(
      "Veriler", 
      `> Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> Toplam kanal: **${
        client.channels.cache.size
      }**`
    ) 
    .addField(
      "Bot Geliştiricisi",
      `> Bot geliştiricisi ➡ <@790267247456944179> | **Rowina**`
    ) 
    .addField(
      "Sürümler",
      `> Discord.js sürümü: **v${Discord.version}** \n> Node.js sürümü: **${process.version}**`
    ) 
    .addField(
      "Gecikmeler",
      `> Bot pingi: **${
        client.ws.ping
      }** \n> Mesaj gecikmesi: **${new Date().getTime() -
        message.createdTimestamp}**`
    )
    
    .setTimestamp()
    .setColor("RANDOM");
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["istatistik", "i"]
};

exports.help = {
  name: "istatistik",
  description: "Türkiyenin Saatini Gösterir ",
  usage: "gç"
};