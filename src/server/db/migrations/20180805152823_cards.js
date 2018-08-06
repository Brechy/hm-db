exports.up = (knex, Promise) => {
	return knex.schema.createTable('cards', (table) => {
		table.increments();
		table.string('english').notNullable();
		table.string('hangul').notNullable();
		table.integer('score');
		table.timestamps(true, true);
	});
};

exports.down = (knex, Promise) => {
	return knex.schema.dropTable('cards');
};
