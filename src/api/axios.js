const axios = require('axios');
const { API_URL } = require('../constants');


const BOT_URL = process.env.BOT_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    origin: BOT_URL,
  },
});


module.exports = { axiosInstance };
