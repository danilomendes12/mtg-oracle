const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
    msg.channel.send("Well Hello");
  }
  if(msg.content === '!signup') {
      console.log(`userId: ${msg.author.id}`);
      console.log(`name: ${msg.author.username}`);
  }
});

client.login(auth.token);