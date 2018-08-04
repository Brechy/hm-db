'use strict';
module.exports = (sequelize, DataTypes) => {
  var Decks = sequelize.define('Decks', {
    title: DataTypes.VARCHAR,
    user_id: DataTypes.INTEGER
  }, {});
  Decks.associate = function(models) {
    // associations can be defined here
  };
  return Decks;
};