const knex = require('../connection')

addSingleCard = card => {
  return knex('cards')
    .insert(card)
    .returning('*')
}

getSingleCard = id => {
  return (
    knex('cards')
      // .select('*')
      .where({ id: parseInt(id) })
  )
}

getAllCards = () => {
  return knex('cards').select('*')
}

deleteCard = id => {
  return knex('cards')
    .where({ id: parseInt(id) })
    .del()
    .returning('*')
}

module.exports = {
  addSingleCard,
  getSingleCard,
  getAllCards,
  deleteCard
}
