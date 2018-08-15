exports.seed = (knex, Promise) => {
	// Deletes ALL existing entries
	return knex('cards')
		.del()
		.then(() => {
			// Inserts seed entries
			return knex('cards').insert({
				id: 1,
				english: 'Hello',
				hangul: '안녕하세요',
				score: 3
			});
		})
		.then(() => {
			return knex('cards').insert({
				id: 2,
				english: 'I love you',
				hangul: '사랑해',
				score: 5
			});
		})
		.then(() => {
			return knex('cards').insert({
				id: 3,
				english: 'Thank you',
				hangul: '감사합니다',
				score: 4
			});
		});
};
