const knex = require('../connection');

addSingleCard = (card) => {
	console.log(JSON.stringify(card));
	return knex('cards').insert(card);
};

getAllCards = () => {
	return knex('cards').select('*');
};

module.exports = {
	addSingleCard,
	getAllCards
};
