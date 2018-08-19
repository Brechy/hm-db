const knex = require('../connection');

addSingleWord = (english, hangul) => {
	return knex('hangul_cache')
		.insert({english, hangul})
		.returning('*');
};

getSingleWord = (word) => {
	return knex('hangul_cache')
		.select('*')
		.where({ english: word })
    .first();
};

module.exports = {
addSingleWord,
getSingleWord,
};
