const Discord = require('discord.js');

const formatCardOutputFromDatabaseResult = result => {
    let { name, mana_cost, oracle_text, reserved, type_line, scryfall_uri, rarity } = result;
    const imageUrl = result.image_uris.normal;

    if(!mana_cost) mana_cost = '0';

    return new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${name}${mana_cost}`)
            .setURL(scryfall_uri)
            .setDescription(oracle_text)
            .addFields(
                { name: 'Type', value: type_line },
                { name: 'Rarity', value: rarity },
                { name: 'Reserved', value: reserved }
            )
            .setImage(imageUrl)
            .setTimestamp()
}

const formatCardListOutputFromDatabaseResult = result => {
    let cardsList = [];
    result.forEach(item => cardsList.push(`${item.name} ${item.mana_cost} ${item.rarity}`));

    return cardsList;
}

const formatCardLegalities = result => {
    const {legalities, name, scryfall_uri} = result;
    let fields = [];
    
    for(let key in legalities){
       fields.push({name: `${key}`, value:`${legalities[key]}`, inline: true})
    }

    let embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(name)
        .setURL(scryfall_uri)
        .addFields(...fields)
        .setTimestamp();

    return embed;
}

const notFoundMessage = () => {
    return 'Card not found';
}


module.exports = {formatCardOutputFromDatabaseResult, formatCardListOutputFromDatabaseResult, formatCardLegalities, notFoundMessage};