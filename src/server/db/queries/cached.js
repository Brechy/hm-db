const knex = require('../connection');

addSingleWord = (word) => {
	return knex('hangul_cache')
		.insert(word)
		.returning('*');
};

getSingleWord = (word) => {
	return knex('hangul_cache')
		.select('*')
		.where({ id: parseInt(id) });
};

getAllWords = () => {
	return knex('hangul_cache').select('*');
};

module.exports = {
addSingleWord,
getSingleWord,
getAllWords
};
