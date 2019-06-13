const getUserDataFromMessage = (message) => {
  const chatMember = message.from;

  return {
    id: chatMember.id,
    first_name: chatMember.first_name,
    last_name: chatMember.last_name || '',
    username: chatMember.username || '',
    language_code: chatMember.language_code,
  };
};


module.exports = { getUserDataFromMessage };
