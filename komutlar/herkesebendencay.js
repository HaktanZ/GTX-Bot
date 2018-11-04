const Discord = require('discord.js');


exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
      .setDescription("**Herkese Benden Çay, Admine Yok!**")
      .setImage("https://m.blog.hu/le/lezzet/image/siyah_ay.jpg")
      .setColor(0x00AE86)

      message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çay lütfen'],
  permLevel: 0
};

exports.help = {
  name: 'herkesebendençay',
  description: 'Herkese Çay Ismarlarsın',
  usage: 'herkesebendençay'
};
