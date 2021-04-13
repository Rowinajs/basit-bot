const Discord = require("discord.js");

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Bot Davet Linki")
    .setDescription(
      `[Tıkla!]( https://discord.com/api/oauth2/authorize?client_id=830483472925327360&permissions=0&scope=bot)`
    );
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: "davet"
};
