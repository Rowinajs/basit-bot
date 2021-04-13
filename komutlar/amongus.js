const fetch = require("node-fetch");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {//'Vu4ll#0586
  let user = message.mentions.users.first();
  let imp = [true, false];
  let imposter = imp[Math.floor(Math.random() * imp.length)];
  let crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"];
  let crewmate = crew[Math.floor(Math.random() * crew.length)];

  if (!user) {
    return message.channel.send(`${message.author} Bir kişiyi etiketlemelisin!`);
  }

  let data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`);
  let ek = new Discord.MessageAttachment(data.url, "eject.png");

  const embed = new Discord.MessageEmbed()
    .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setTitle(`${message.author.tag} ${user.tag} adlı kullanıcıyı oylayarak astı.`)
    .setColor("BLUE")
    .setDescription(`Veee, sonuç!`)
    .attachFiles(ek)
    .setImage(`attachment://eject.png`)
    .setTimestamp();

  message.channel.send(embed);
};

exports.conf = {//'Vu4ll#0586
  enabled: true,
  guildOnly: false,
  aliases: ["eject"],
  permLevel: 0
};

exports.help = {
  name: "eject",
  description: "",
  usage: "among"
};