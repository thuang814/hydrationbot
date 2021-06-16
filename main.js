require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
const randomanime = require('random-anime')

const commandSymbol='$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interaction', async interaction => {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

client.on('message', async message => {
    //ping command
    if (message.content.toLowerCase() === 'ping') {
      console.log(message.content)
      message.channel.send('Pong!');
    }
    //anime picture command
    if (message.content.toLowerCase() === commandSymbol.concat('anime')) {
      console.log(message.content)
      const anime = randomanime.anime();
      message.channel.send(anime);
    }
    //anime nsfw picture command
    if (message.content.toLowerCase() === commandSymbol.concat('animensfw')) {
      console.log(message.content)
      const anime = randomanime.nsfw();
      message.channel.send(anime);
    }

    if (message.content.toLowerCase() === commandSymbol.concat('spam')) {
      console.log(message.content)
      spamTest(message);
    }

  });

  async function spamTest(message){
    for(i = 0; i < 21; i++){
      message.channel.send('Spam!');
    }
    // while(true){
    //   message.channel.send('Spam!');
    // }
  }

client.login(process.env.TOKEN);