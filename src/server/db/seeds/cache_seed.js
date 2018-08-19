exports.seed = (knex, Promise) => {
	// Deletes ALL existing entries
	return knex('hangul_cache')
		.del()
		.then(() => {
			// Inserts seed entries
			return knex('hangul_cache').insert({
				english: 'Hello',
				hangul: '안녕하세요',
			});
		})
		.then(() => {
			return knex('hangul_cache').insert({
				english: 'I love you',
				hangul: '사랑해',
			});
		})
		.then(() => {
			return knex('hangul_cache').insert({
				english: 'Thank you',
				hangul: '감사합니다',
			});
		})
    .then(() => {
			return knex('hangul_cache').insert({
				english: 'Dog',
				hangul: '개',
			});
		})
    .then(() => {
			return knex('hangul_cache').insert({
				english: 'Cat',
				hangul: '고양이',
			});
		});
};
