const { getUploadedAvatarUrl } = require('./get-uploaded-avatar-url');


const getUserDataFromMessage = async (message) => {
  const chatMember = message.from;

  const avatarUrl = await getUploadedAvatarUrl(chatMember.id);

  return {
    id: chatMember.id,
    first_name: chatMember.first_name,
    last_name: chatMember.last_name || null,
    username: chatMember.username || null,
    avatarUrl: avatarUrl || null,
  };
};


module.exports = { getUserDataFromMessage };
