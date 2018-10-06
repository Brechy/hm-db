const Router = require('koa-router');
const router = new Router();
const queries = require('../db/queries/users');


router.get('/users', async (ctx) => {
	try {
		const users = await queries.getAllUsers();
		ctx.body = {
			status: 'success',
			data: users
		};
	} catch (err) {
		console.log(err);
	}
});

router.post('/users', async (ctx) => {
	try {
		const body = ctx.request.body;
		const user = await queries.addSingleUser(ctx.request.body);
		if (card.length) {
			ctx.status = 201;
			ctx.body = {
				status: 'success',
			};
		} else {
			ctx.status = 400;
			ctx.body = {
				status: 'error',
				message: `Something went wrong ${JSON.stringify(user)}`
			};
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
