const { getUploadedLatestAvatar } = require('../lib');
const { getUser, saveUser, updateUser } = require('../api');
const { compareUsers, getUserDataFromMessage } = require('../utils');
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

const sendGreetingMessage = (context) => {
  context.reply(
    'For logging in the website, please, press the button below',
    { reply_markup: generateReplyMarkup() },
  );
};


const setUpStartCommand = () => {
  bot.start(async (context) => {
    // Sending message first so user wouldn't have to wait
    sendGreetingMessage(context);

    const userData = getUserDataFromMessage(context.update.message);
    const user = await getUser(userData.id);

    if (!user) {
      userData.avatar = await getUploadedLatestAvatar(userData.id);
      saveUser(userData);
    } else {
      const isUserDataUpToDate = await compareUsers({ user, userData });

      if (!isUserDataUpToDate) {
        userData.avatar = await getUploadedLatestAvatar(userData.id);
        updateUser(userData);
      }
    }
  });
};


module.exports = { setUpStartCommand };
