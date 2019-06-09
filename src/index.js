import { setupStartCommand } from './commands';
import { bot } from './bot';


setupStartCommand();

bot.startPolling();

console.log('Bot is up and running');
