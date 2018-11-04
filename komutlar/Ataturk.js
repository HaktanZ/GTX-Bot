const Discord = require('discord.js');


exports.run = function(client, message) {

      const embed = new Discord.RichEmbed()
          .setDescription("**Ataturk :heart_eyes:**")
          .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Mustafa_Kemal_Ataturk_looking_through_a_train_window_over_Turkish_flag.jpg/220px-Mustafa_Kemal_Ataturk_looking_through_a_train_window_over_Turkish_flag.jpg")
          .setColor(0x00AE86)

          message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Ataturk',
  description: 'Gününüz Güzel Geçsin.',
  usage: 'Ataturk'
};
