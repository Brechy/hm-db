const knex = require('../connection');
const bcrypt = require('bcrypt');

const validateUser = async (username, password) => {
  const dbHash = await knex('users')
	.select('password')
	.where({username: username});

	if(dbHash.length === 0) {
    console.log('No users match')
		return false
	}
	const legit = await new Promise((resolve, reject) => {
		bcrypt.compare(password, dbHash[0].password, function(err, res) {
			if(res) {
				console.log('Passwords match!', res)
				resolve(true)
			} else {
				console.log('Passwords DO NOT match...', res)
				resolve(false)
			}
		})
	})
	return legit
}

const addSingleUser = async (user) => {

  const password = user.password;
	const username = user.username;

  const hashedPass = await new Promise((resolve, reject) => {
		bcrypt.hash(password, 9, function(err, hash) {
			if(err) {
				console.log("Error hashing password", err)
				reject(err)
				return
			}
			resolve(hash)
	  })
	})
	const userInfo = {
		username: username, password: hashedPass
	}
	return knex('users')
	.insert(userInfo)
	.returning('*');
};

getSingleUser = (username) => {
  return knex('users')
		.select('*')
		.where({username: username});
}

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
	validateUser,
  addSingleUser,
  getAllUsers,
  deleteUser
}
