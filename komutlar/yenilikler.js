const Discord = require('discord.js');


exports.run = function(client, message) {

      const embed = new Discord.RichEmbed()
          .setDescription("**Yenilikler**")
          .addField('- !yardım Komudu Eklendi. Bot Komutlarının Tümüne Bakabilirsiniz.')
          .addField('- !öneri Komudu Eklendi. Bot Kurucusuna Öneride Bulunabilirsiniz.')
          .addField('- !8ball Komudu Eklendi. Bota Evet-Hayır Soruları Sorabilirsiniz.')
          .addField('- !simit Komudu Eklendi. Çayın Yanında Gevrek Bir Simit Yiyebilirsiniz.')
          .setColor(0x00AE85)

          message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota Eklenen Yeniliklere Bakabilirsin.',
  usage: 'yenilikler'
};
