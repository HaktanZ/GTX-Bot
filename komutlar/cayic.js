const Discord = require('discord.js');


exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
      .setDescription("**Sıcacık Bir Çay, Afiyet Olsun Paşam!**")
      .setImage("https://images.pexels.com/photos/340730/pexels-photo-340730.jpeg?w=940&h=650&auto=compress&cs=tinysrgb")
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
  name: 'çayiç',
  description: 'Sıcacık Bir Çay İçersin!',
  usage: 'çayiç'
};
