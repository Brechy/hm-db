exports.up = function(knex, Promise) {
	return knex.schema.createTable('hangul_cache', (table) => {
		table.string('english').primary().notNullable();
		table.string('hangul');
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('hangul_cache');
};
