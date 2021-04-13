const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.channel.send("Topa Vuruldu..").then(message => {
    var red = [
      //synex //sharpen
      "``Tam 90'a Vurdun!`` :first_place:",
      "``Top Uzaya Çıktı!`` :flushed:",
      "``Penaltıyı Gole Çevirdin! (Hawli)`` :sunglasses:",
      "``Topa O Kadar Yavaş Vurdun Ki, Wuaww Uyicam Galiba!``  :yawning_face:",
      "``Savunma Oyuncuları Topu Tuttu!`` :ghost:",
      "``Kalecinin Yanından Geçti, Ve GOOOLL!`` :partying_face:",
      "``Kalecinin tam kucağına!`` :soccer:",
      "``Hey, Topa Vuramadın. Hala Önünde Duruyor!`` :zany_face:",
      "``Top Sahadan Çıktı! Topu Göremiyorum.`` :face_with_monocle:"
    ];
    var red = red[Math.floor(Math.random() * red.length)]; //Red Code
    message.edit(`${red}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["şut-çek"],
  permLevel: 0
};

exports.help = {
  name: "şut-çek",
  description: "Şut Çekersiniz.",
  usage: "şut-çek"
};
