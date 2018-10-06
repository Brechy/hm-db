exports.seed = (knex, Promise) => {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(() => {
			// Inserts seed entries
			return knex('users').insert({
				username: 'brechin',
				password: 'supersecret1'
			});
		})
		.then(() => {
			return knex('users').insert({
				username: 'tedothy',
				password: 'safeNsecure'
			});
		})
		.then(() => {
			return knex('users').insert({
				username: 'barb_kellner',
				password: 'pizzaeater'
			});
		});
};
