'use strict';
module.exports = (sequelize, DataTypes) => {
	const Cards_of_Decks = sequelize.define(
		'Cards_of_Decks',
		{
			card_id: DataTypes.INTEGER,
			deck_id: DataTypes.INTEGER
		},
		{}
	);
	Cards_of_Decks.associate = function(models) {
		// associations can be defined here
	};
	return Cards_of_Decks;
};
