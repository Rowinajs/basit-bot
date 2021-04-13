const Discord = require("discord.js");

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Destek Sunucumuz")
    .setDescription(
      `[Tıkla!]( https://discord.gg/2qhQPgAaQe)`
    );
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "destek",
  description: "",
  usage: "destek"
};
