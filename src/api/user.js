const axios = require('axios');
const { API_URL } = require('../constants');


const getUser = (userId) => {
  return axios.get(`${API_URL}/user`, { data: { id: userId } })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.data ? error.data.message : error);
      return null;
    });
};

const saveUser = (newUser) => {
  return axios.post(`${API_URL}/user`, newUser)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.data ? error.data.message : error);
      return null;
    });
};

const updateUser = (updatedUser) => {
  return axios.put(`${API_URL}/user`, updatedUser)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.data ? error.data.message : error);
      return null;
    });
};


module.exports = { getUser, saveUser, updateUser };
