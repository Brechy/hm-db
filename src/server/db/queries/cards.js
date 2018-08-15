const knex = require('../connection');

addSingleCard = (card) => {
	return knex('cards')
		.insert(card)
		.returning('*');
};

getSingleCard = (card) => {
	return knex('cards')
		.select('*')
		.where({ id: parseInt(id) });
};

getAllCards = () => {
	return knex('cards').select('*');
};

deleteCard = (id) => {
	return knex('cards')
		.del()
		.where({ id: parseInt(id) })
		.returning('*');
};

module.exports = {
	addSingleCard,
	getSingleCard,
	getAllCards,
	deleteCard
};
