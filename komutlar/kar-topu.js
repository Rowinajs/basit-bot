const Discord = require("discord.js");

exports.run = (client, msg, args) => {

let python = args.slice(0).join(" ");
if (python.length < 1) {

return msg.reply("> **Kime kartopu atmak isterin ya isim yaz yada etiketle!**");

} else {

    msg.channel
      .send("<=====     :snowflake:")
      .then(nmsg => nmsg.edit("<=====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(`${python} artık :snowman: oldu.`));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kartopu"],
  permLevel: 0
};

exports.help = {
  name: "kar-topu",
  description: "ALİEN V12",
  usage: "a"
};
