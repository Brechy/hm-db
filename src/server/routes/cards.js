const Router = require('koa-router');
const queries = require('../db/queries/cards');

const router = new Router();
const BASE_URL = '/cards';

//get all cards from the database
router.get(BASE_URL, async (ctx) => {
	console.log('get all the poop');
	try {
		const cards = await queries.getAllCards();
		ctx.body = {
			status: 'success',
			data: cards
		};
	} catch (err) {
		console.log(err);
	}
});

router.get(`${BASE_URL}/:id`, async (ctx) => {
	try {
		const card = await queries.getSingleCard(ctx.params.id);
		ctx.body = {
			status: 'success',
			data: card
		};
	} catch (err) {
		console.log(err);
	}
});

//get translated korean word from Naver API
router.get('/translate/:en', async (ctx) => {
	fetch(NAVER_API, {
		method: 'POST',
		body: `source=en&target=ko&text=${encodeURIComponent(english)}`,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
			'X-Naver-Client-Id': NAVER_CLIENT_ID,
			'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
		}
	})
		.then((res) => res.json())
		.then((json) => console.log(json));
});

//add single english/korean card to database/cards
router.post(BASE_URL, async (ctx) => {
	console.log('poop');
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
