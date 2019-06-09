const { getUserDataFromMessage } = require('../lib/get-user-data-from-message');
const { bot } = require('../bot');
const { WEBSITE_URL } = require('../constants');


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


const setUpStartCommand = () => {
  bot.start(async (context) => {
    const userData = await getUserDataFromMessage(context.update.message);

    context.reply(
      'Hey!\n\nFor logging in the website, please, press the button below',
      { reply_markup: generateReplyMarkup() },
    );
  });
};


module.exports = { setUpStartCommand };
