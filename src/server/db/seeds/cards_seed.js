exports.seed = (knex, Promise) => {
	// Deletes ALL existing entries
	return knex('cards')
		.del()
		.then(() => {
			// Inserts seed entries
			return knex('cards').insert({
				english: 'Hello',
				hangul: '안녕하세요',
				score: 3
			});
		})
		.then(() => {
			return knex('cards').insert({
				english: 'I love you',
				hangul: '사랑해',
				score: 5
			});
		})
		.then(() => {
			return knex('cards').insert({
				english: 'Thank you',
				hangul: '감사합니다',
				score: 4
			});
		});
};
