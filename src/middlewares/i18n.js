const path = require('path');
const I18N = require('telegraf-i18n');
const { bot } = require('../bot');


const i18n = new I18N({
  directory: path.resolve(__dirname, '../locales'),
  useSession: true,
  sessionName: 'session',
  defaultLanguage: 'en',
});

const setUpI18N = () => {
  bot.use(i18n.middleware());
};


module.exports = { setUpI18N };
