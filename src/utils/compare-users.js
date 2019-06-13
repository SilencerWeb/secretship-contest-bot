const isEqual = require('fast-deep-equal');
const { getLatestAvatarFileId } = require('./get-latest-avatar-file-id');


const getCleanUserObject = (user) => {
  const { id, first_name, last_name, username, language_code, avatar } = user;

  return {
    id,
    first_name,
    last_name: last_name || '',
    username: username || '',
    avatarFileId: avatar ? avatar.file_id : '',
    language_code,
  };
};

const getReadyUserDataObject = async (userData) => {
  const latestAvatarFileId = await getLatestAvatarFileId(userData.id);

  return {
    ...userData,
    id: userData.id.toString(), // Because Telegram stores ID as Number, but on backend they are stored as String
    avatarFileId: latestAvatarFileId || '',
  };
};


const compareUsers = async ({ user, userData }) => {
  const cleanUserObject = getCleanUserObject(user);
  const readyUserDataObject = await getReadyUserDataObject(userData);

  return isEqual(cleanUserObject, readyUserDataObject);
};


module.exports = { compareUsers };
