'use strict';
module.exports = (sequelize, DataTypes) => {
	const Cards = sequelize.define(
		'Cards',
		{
			english: DataTypes.STRING,
			hangul: DataTypes.STRING,
			score: DataTypes.INTEGER
		},
		{}
	);
	Cards.associate = function(models) {
		// associations can be defined here
	};
	return Cards;
};
