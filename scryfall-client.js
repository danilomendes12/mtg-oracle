const axios = require('axios');

const baseUrl = 'https://api.scryfall.com';

const getCardByName = async (name) => {
    axios.get(`${baseUrl}/cards/named?exact=${name}`)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
}

module.exports = { getCardByName };