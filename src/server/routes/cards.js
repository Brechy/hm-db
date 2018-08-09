const Router = require('koa-router');
const queries = require('../db/queries/cards');

const router = new Router();
const BASE_URL = '/cards';

router.post(`${BASE_URL}`, async (ctx) => {
	try {
		const body = ctx.request.body;
		const card = await queries.addSingleCard(ctx.request.body);
		if (card.length) {
			ctx.status = 201;
			ctx.body = {
				status: 'success',
				data: card
			};
		} else {
			ctx.status = 400;
			ctx.body = {
				status: 'error',
				message: `Something went wrong ${JSON.stringify(card)}`
			};
		}
	} catch (err) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: err.message || `Sorry, an error occurred ${err}`
		};
	}
});

module.exports = router;
