import { getUserDataFromMessage } from '../lib';
import { bot } from '../bot';
import { WEBSITE_URL } from '../constants';


const generateReplyMarkup = () => {
  return {
    inline_keyboard: [
      [
        {
          text: 'Login',
          login_url: {
            url: WEBSITE_URL,
          },
        },
      ],
    ],
  };
};


export const setupStartCommand = () => {
  bot.start(async (context) => {
    const userData = await getUserDataFromMessage(context.update.message);

    context.reply(
      'Hey!\n\nFor logging in the website, please, press the button below',
      { reply_markup: generateReplyMarkup() },
    );
  });
};
