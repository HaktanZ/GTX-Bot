const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} Kaç SantiMetre Oldugunu Merak Etti!`,
            image: {
                url: "https://img-fotki.yandex.ru/get/28561/289474118.1228/0_17f661_23bac660_L"
            }
        }
    });

    let bitiş = (Math.random() * (30 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, Malafatın ${bitiş.toFixed(2)} SantiMetre!`
            }
        });
    }, 5 * 1000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: ':)',
  usage: 'kaçcm'
};
