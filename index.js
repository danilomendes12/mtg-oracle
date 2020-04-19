const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();
const data = require('./data')
const scryfallClient = require('./scryfall-client');

const prefix = 'mtg-oracle ';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
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
    scryfallClient.getCardByName(args[0]);
  }

});

client.login(auth.token);