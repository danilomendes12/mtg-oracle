const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();
const data = require('./data')
const scryfallClient = require('./scryfall-client');
const responseUtil = require('./response-util')

const prefix = '$oracle ';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (command === 'ping') {
    message.reply('Well Hello');
  }

  if(command === 'signup') {
      console.log(`userId: ${msg.author.id}`);
      console.log(`name: ${msg.author.username}`);
      data.createUser(msg.author.id, msg.author.username);
  }

  if(command === 'search') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    const response = await scryfallClient.getCardByExactName(args.join(' '));

    if(response) message.channel.send(response);
    else message.channel.send(responseUtil.notFoundMessage());
  }

  if(command === 'text'){
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    const response = await scryfallClient.getCardNamesByText(args.join(' '));

    if(response) message.channel.send(response);
    else message.channel.send(responseUtil.notFoundMessage());
  }

});

client.login(auth.token);