const { bot } = require('../bot');


const getLatestAvatarFileId = async (userId) => {
  const userAvatar = await bot.telegram.getUserProfilePhotos(userId, 0, 1);
  if (userAvatar.photos.length === 0) return null;

  return userAvatar.photos[0][2].file_id;
};


module.exports = { getLatestAvatarFileId };
