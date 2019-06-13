const axios = require('axios');
const FormData = require('form-data');
const { bot } = require('../bot');
const { getLatestAvatarFileId } = require('../utils');


const uploadAvatar = (avatar) => {
  const form = new FormData();
  form.append('data', avatar, {
    filename: 'filename.jpg',
  });

  return new Promise((resolve, reject) => {
    form.submit('https://telegra.ph/upload', (error, response) => {
      if (error) return reject(error);

      let data = '';

      const onData = (chunk) => data += chunk;

      const onEnd = () => {
        response.removeListener('data', onData);
        response.removeListener('error', reject);
        response.removeListener('end', onEnd);

        const parsedData = JSON.parse(data);
        const url = `https://telegra.ph${parsedData[0].src}`;

        resolve(url);
      };

      response.on('data', onData);
      response.on('error', reject);
      response.on('end', onEnd);
    });
  });
};


const getUploadedLatestAvatar = async (userId) => {
  const latestAvatarFileId = await getLatestAvatarFileId(userId);
  if (!latestAvatarFileId) return null;

  const userAvatarFileLink = await bot.telegram.getFileLink(latestAvatarFileId);
  const { data: userAvatarArrayBuffer } = await axios.get(userAvatarFileLink, { responseType: 'arraybuffer' });
  const uploadedAvatarUrl = await uploadAvatar(userAvatarArrayBuffer);

  return { url: uploadedAvatarUrl, file_id: latestAvatarFileId };
};


module.exports = { getUploadedLatestAvatar };
