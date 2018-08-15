const knex = require('../connection');

addSingleCard = (card) => {
	return knex('cards').insert(card);
};

getSingleCard = (card) => {
	return knex('cards')
		.select('*')
		.where({ id: parseInt(id) });
};

getAllCards = () => {
	return knex('cards').select('*');
};

module.exports = {
	addSingleCard,
	getSingleCard,
	getAllCards
};
