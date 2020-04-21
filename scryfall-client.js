const axios = require('axios');
const responseUtil = require('./response-util')

const baseUrl = 'https://api.scryfall.com';

const getCardByExactName = async name => {
    try {
        const response = await axios.get(`${baseUrl}/cards/named?exact=${name}`);
        if(response.data) return responseUtil.formatCardOutputFromDatabaseResult(response.data);
    } catch(error) {
        console.log(error);
        return;
    }
}

const getCardNamesByText = async text => {
    try {
        const textQuery = `o:"${text}"`;
        const response = await axios.get(`${baseUrl}/cards/search?q=${textQuery}`);

        if(response.data.data) return responseUtil.formatCardListOutputFromDatabaseResult(response.data.data);
        return;
    } catch(error) {
        console.log(error);
        return;
    }
}

const getCardLegalitiesByName = async name => {
    try {
        const response = await axios.get(`${baseUrl}/cards/named?exact=${name}`);
        if(response.data){
            return responseUtil.formatCardLegalities(response.data);
        }
    } catch(error) {
        console.log(error);
        return;
    }
}

module.exports = { getCardNamesByText, getCardByExactName, getCardLegalitiesByName};