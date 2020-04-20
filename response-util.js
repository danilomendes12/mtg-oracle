const Discord = require('discord.js');

const formatCardOutputFromResult = (result) => {
    let { name, mana_cost, oracle_text, reserved, type_line, scryfall_uri, rarity } = result;
    const imageUrl = result.image_uris.normal;
    
    if(!mana_cost) mana_cost = '0';

    return new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(name)
            .setURL(scryfall_uri)
            .setDescription(oracle_text)
            .addFields(
                { name: 'Mana Cost', value: mana_cost },
                { name: 'Type', value: type_line },
                { name: 'Rarity', value: rarity },
                { name: 'Reserved', value: reserved }
            )
            .setImage(imageUrl)
            .setTimestamp()
}

const notFoundMessage = () => {
    return 'Card not found';
}


module.exports = { formatCardOutputFromResult, notFoundMessage };