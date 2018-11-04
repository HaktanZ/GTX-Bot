const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot Yeniden Başlatılıyor!").then(msg =>{
        console.log("[BOT]Yeniden Başlatılıyor.");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};
