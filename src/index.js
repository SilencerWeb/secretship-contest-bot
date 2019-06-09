const { setUpStartCommand } = require('./commands');
const { bot } = require('./bot');


// Setting up commands
setUpStartCommand();

// Running bot
bot.startPolling();
console.log('Bot is up and running');
