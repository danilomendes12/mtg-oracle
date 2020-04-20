const axios = require('axios');
const responseUtil = require('./response-util')

const baseUrl = 'https://api.scryfall.com';

const getCardByExactName = async name => {
    try {
        const response = await axios.get(`${baseUrl}/cards/named?exact=${name}`);
        if(response.data) return responseUtil.formatCardOutputFromResult(response.data);
    } catch(error) {
        console.log(error);
        return;
    }
}

const getCardNamesByText = async text => {
    try {
        const textQuery = `o:"${text}"`;
        const response = await axios.get(`${baseUrl}/cards/search?q=${textQuery}`);
        const names = [];
        if(response.data.data){
            response.data.data.forEach(item => names.push(`${item.name} ${item.mana_cost}`));
        }
        return names;
    } catch(error) {
        console.log(error);
        return;
    }
}

module.exports = { getCardNamesByText, getCardByExactName};