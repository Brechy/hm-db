const knex = require('../connection');

addSingleCard = (card) => {
	console.log(JSON.stringify(card));
	return knex('cards').insert(card);
	// .returning('*');
};

module.exports = {
	addSingleCard
};
