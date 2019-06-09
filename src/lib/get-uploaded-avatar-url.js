const axios = require('axios');
const { uploadAvatar } = require('./upload-avatar');
const { bot } = require('../bot');


const getUploadedAvatarUrl = async (userId) => {
  const userAvatar = await bot.telegram.getUserProfilePhotos(userId, 0, 1);

  if (userAvatar.photos.length === 0) return null;

  const userAvatarFileLink = await bot.telegram.getFileLink(userAvatar.photos[0][2].file_id);
  const { data: userAvatarArrayBuffer } = await axios.get(userAvatarFileLink, { responseType: 'arraybuffer' });
  const uploadedAvatarUrl = await uploadAvatar(userAvatarArrayBuffer);

  return uploadedAvatarUrl;
};


module.exports = { getUploadedAvatarUrl };
