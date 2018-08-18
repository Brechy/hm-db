exports.up = function(knex, Promise) {
	return knex.schema.createTable('hangul_cache', (table) => {
		table.increments();
		table.string('english').notNullable();
		table.string('hangul').notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('hangul_cache');
};
