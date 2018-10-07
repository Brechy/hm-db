const knex = require('../connection');
const bcrypt = require('bcrypt');

const validateUser = async (username, password) => {
	//hash password
	const hashedPassword = await new Promise((resolve, reject) => {
		bcrypt.hash(password, 9, function(err, hash) {
			if(err) {
				reject(err)
				return
			}
			resolve(hash)
		})
	})
	const legit = await knex('users')
	.select('*')
	.where({
		username: username,
		password: hashedPassword,
	})
	console.log(legit)
}

const addSingleUser = async (user) => {

  const password = user.password;
	const username = user.username;
	console.log("I am the password", password)
	console.log("I am the username", username)

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
  addSingleUser,
  getAllUsers,
  deleteUser
}
