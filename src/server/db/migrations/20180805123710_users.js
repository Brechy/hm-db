exports.up = (knex, Promise) => {
	return knex.schema.createTable('users', (table) => {
		table.increments();
		table.string('user').notNullable();
		table.timestamps(true, true);
	});
};

exports.down = (knex, Promise) => {
	return knex.schema.dropTable('users');
};
