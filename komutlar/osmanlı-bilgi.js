const Discord = require("discord.js");

exports.run = (client, message, guild) => {
  const fwhy = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setAuthor("Devlet-i Aliyye-i Osmaniyye")
    .setDescription(
      "**Osmanlı İmparatorluğu veya Osmanlı Devleti, Oğuz Türklerinden Osman Gazi'nin kurduğu Osmanlı Hanedanı'nın hükümdarlığında varlığını sürdürmüş çok uluslu Sünni Müslüman devlet. Doğu Avrupa, Güneybatı Asya ve Kuzey Afrika'ya kadar topraklarını genişletmiş ve 16. yüzyılda dünyanın en güçlü imparatorluğu halini almıştır.**"
    )
    .addField("⭐ Başkent", "**İstanbul**")
    .addField("⚡ Kuruluş Tarihi", "**1299 Yılında kurulmuştur.**")
    .addField("🌐 Yüz Ölçümü", "**1.800.000 km²**")
    .addField("👤 Nüfus", "**14.63 Milyon (1919 sayımlı)**")
    .addField("💎 Para Birimleri", "**Kuruş, Akçe, Osmanlı Lirası**")
    .addField(
      "👑 Hükümet",
      "**Meşrutiyet, Mutlak monarşi, Tek parti rejimi, Askerî diktatörlük, Dual monarchy**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/726720013389529130/730663503421243402/s-ddd5dbbf9a162ef492321619cde0bc2b9fad2aca.jpg"
    )
  
    .setFooter(".", "[link](https://discordapp.com/)")

    .setFooter("Coded By Rowina Star ☆#0999");

  message.channel.send(fwhy);
};

exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["osmanli, ottoman"],
  permlevel: 0
};

exports.help = {
  name: "osmanlı-bilgi",
  description: "osmanlı",
  usage: "osmanlı"
};