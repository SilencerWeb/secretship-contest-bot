import axios from 'axios';
import { uploadAvatar } from './';
import { bot } from '../bot';


export const getUploadedAvatarUrl = async (userId) => {
  const userAvatar = await bot.telegram.getUserProfilePhotos(userId, 0, 1);
  const userAvatarFileLink = await bot.telegram.getFileLink(userAvatar.photos[0][2].file_id);
  const { data: userAvatarArrayBuffer } = await axios.get(userAvatarFileLink, { responseType: 'arraybuffer' });
  const uploadedAvatarUrl = await uploadAvatar(userAvatarArrayBuffer);

  return uploadedAvatarUrl;
};
