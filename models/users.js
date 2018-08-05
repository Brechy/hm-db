'use strict';
module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		'Users',
		{
			user: DataTypes.STRING
		},
		{}
	);
	Users.associate = function(models) {
		// associations can be defined here
	};
	return Users;
};
