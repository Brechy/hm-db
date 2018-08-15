const knex = require('../connection');

addSingleCard = (card) => {
	console.log(JSON.stringify(card));
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
