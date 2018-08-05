exports.seed = (knex, Promise) => {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(() => {
			// Inserts seed entries
			return knex('users').insert({
				id: 1,
				user: 'brechin'
			});
		})
		.then(() => {
			return knex('users').insert({
				id: 2,
				user: 'tedothy'
			});
		})
		.then(() => {
			return knex('users').insert({
				id: 3,
				user: 'barb_kellner'
			});
		});
};
