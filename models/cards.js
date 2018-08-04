'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cards = sequelize.define('Cards', {
    english: DataTypes.VARCHAR,
    hangul: DataTypes.VARCHAR,
    score: DataTypes.INTEGER
  }, {});
  Cards.associate = function(models) {
    // associations can be defined here
  };
  return Cards;
};