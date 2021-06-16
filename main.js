require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const randomanime = require('random-anime')

const commandSymbol='$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }

    if (message.content === commandSymbol.concat("anime")) {
      const anime = randomanime.anime();
      message.channel.send(anime);
    }

    if (message.content === commandSymbol.concat("animensfw")) {
      const anime = randomanime.nsfw();
      message.channel.send(anime);
    }

  });

client.login(process.env.TOKEN);