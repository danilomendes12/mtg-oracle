const axios = require('axios');
const responseUtil = require('./response-util')

const baseUrl = 'https://api.scryfall.com';

const getCardByName = async name => {
    try {
        const response = await axios.get(`${baseUrl}/cards/named?exact=${name}`);
        if(response.data) return responseUtil.formatCardOutputFromResult(response.data);
    } catch(error) {
        console.log(error);
        return;
    }
}

module.exports = { getCardByName };