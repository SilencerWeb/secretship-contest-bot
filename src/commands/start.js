import { getUserDataFromMessage } from '../lib';
import { bot } from '../bot';


export const setupStartCommand = () => {
  bot.start(async (context) => {
    const userData = await getUserDataFromMessage(context.update.message);

    console.log(userData);
  });
};
