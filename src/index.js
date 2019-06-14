const session = require('telegraf/session');
const { startServer } = require('./lib');
const { setUpStartCommand } = require('./commands');
const { setUpI18N } = require('./middlewares');
const { bot } = require('./bot');


// Setting up sessions
bot.use(session());

// Setting up a server, it is required for heroku :(
startServer();

// Setting up middlewares
setUpI18N();

// Setting up commands
setUpStartCommand();

// Starting bot
bot.startPolling();
console.log('Bot is up and running');
