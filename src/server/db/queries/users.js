const knex = require('../connection');

addSingleUser = (user) => {
	return knex('users')
		.insert(user)
		.returning('*');
};

getAllUsers = () => {
	return knex('users').select('*');
};

deleteUser = (id) => {
	return knex('users')
		.del()
		.where({ id: parseInt(id) })
		.returning('*');
};

module.exports = {
  addSingleUser,
  getAllUsers,
  deleteUser
}
