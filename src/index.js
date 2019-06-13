const { startServer } = require('./lib');
const { setUpStartCommand } = require('./commands');
const { bot } = require('./bot');


// Setting up a server, it is required for heroku :(
startServer();

// Setting up commands
setUpStartCommand();

// Running bot
bot.startPolling();
console.log('Bot is up and running');
