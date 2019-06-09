import { getUploadedAvatarUrl } from './';


export const getUserDataFromMessage = async (message) => {
  const chatMember = message.from;

  return {
    id: chatMember.id,
    first_name: chatMember.first_name,
    last_name: chatMember.last_name || null,
    username: chatMember.username || null,
    avatarUrl: await getUploadedAvatarUrl(chatMember.id),
  };
};
