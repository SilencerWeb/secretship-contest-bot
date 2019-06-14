const { getUploadedLatestAvatar } = require('../lib');
const { getUser, saveUser, updateUser } = require('../api');
const { compareUsers, getUserDataFromMessage } = require('../utils');
const { bot } = require('../bot');
const { WEBSITE_URL } = require('../constants');


const generateReplyMarkup = (context) => {
  return {
    inline_keyboard: [
      [
        {
          text: context.i18n.t('loginButtonText'),
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
    context.i18n.t('greetingMessage'),
    { reply_markup: generateReplyMarkup(context) },
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
