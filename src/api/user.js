const { axiosInstance } = require('./axios');


const getUser = (userId) => {
  return axiosInstance.get('/user', { data: { id: userId } })
    .then(({ data: { user } }) => user)
    .catch((error) => {
      console.log(error.response ? error.response.data.message : error);
      return null;
    });
};

const saveUser = (newUser) => {
  return axiosInstance.post('/user', newUser)
    .then(({ data: { user } }) => user)
    .catch((error) => {
      console.log(error.response ? error.response.data.message : error);
      return null;
    });
};

const updateUser = (updatedUser) => {
  return axiosInstance.put('/user', updatedUser)
    .then(({ data: { user } }) => user)
    .catch((error) => {
      console.log(error.response ? error.response.data.message : error);
      return null;
    });
};


module.exports = { getUser, saveUser, updateUser };
