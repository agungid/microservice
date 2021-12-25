const axios = require('axios');

const { HIT_TIMEOUT } = process.env;

module.exports = (baseUrl) => {
    return axios.create({
        baseURL:baseUrl,
        timeout: parseInt(HIT_TIMEOUT)
    });
}