'use strict';
module.exports = (sequelize, DataTypes) => {
	const Decks = sequelize.define(
		'Decks',
		{
			title: DataTypes.STRING,
			user_id: DataTypes.INTEGER
		},
		{}
	);
	Decks.associate = function(models) {
		// associations can be defined here
	};
	return Decks;
};
