
const formatCardOutputFromResult = (result) => {
    const { name, mana_cost, oracle_text, reserved, type_line } = result;
    
    return `Name: ${name} \nMana cost: ${mana_cost} \nDescription: ${oracle_text} \nReserved: ${reserved} \nType: ${type_line}`;
}

const notFoundMessage = () => {
    return 'Card not found';
}


module.exports = { formatCardOutputFromResult, notFoundMessage };