const { setupStartCommand } = require('./commands');
const { bot } = require('./bot');


setupStartCommand();

bot.startPolling();

console.log('Bot is up and running');
