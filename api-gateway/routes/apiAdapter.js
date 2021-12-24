const axios = require('axios');

const { HIT_TIMEOUT } = process.env;

module.exports = (baseUrl) => {
    return axios.create({
        baseUrl:baseUrl,
        timeout: HIT_TIMEOUT
    });
}