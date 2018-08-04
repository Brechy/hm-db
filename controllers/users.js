const models = require('../models');

const getAll = async (ctx) => {
	const users = await models.User.findAll();
	ctx.body = {
		users
	};
};

module.exports = { getAll };
