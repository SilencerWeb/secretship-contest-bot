const axios = require('axios');
const { API_URL } = require('../constants');


const getUser = (userId) => {
  return axios.get(`${API_URL}/user`, { data: { id: userId } })
    .then(({ data: { user } }) => user)
    .catch((error) => {
      console.log(error.response ? error.response.data.message : error);
      return null;
    });
};

const saveUser = (newUser) => {
  return axios.post(`${API_URL}/user`, newUser)
    .then(({ data: { user } }) => user)
    .catch((error) => {
      console.log(error.response ? error.response.data.message : error);
      return null;
    });
};

const updateUser = (updatedUser) => {
  return axios.put(`${API_URL}/user`, updatedUser)
    .then(({ data: { user } }) => user)
    .catch((error) => {
      console.log(error.response ? error.response.data.message : error);
      return null;
    });
};


module.exports = { getUser, saveUser, updateUser };
