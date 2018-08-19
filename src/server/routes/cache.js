const Router = require('koa-router');
const queries = require('../db/queries/cards');
const fetch = require('node-fetch');

const router = new Router();
const BASE_URL = '/hangul_cache';

//get all cards from the database
router.get(`${BASE_URL}`, async (ctx) => {
	try {
		const words = await queries.getAllWords();
		ctx.body = {
			status: 'success',
			data: words
		};
	} catch (err) {
		console.log(err);
	}
});

router.get(`${BASE_URL}/:id`, async (ctx) => {
	try {
		const word = await queries.getSingleWord(ctx.params.id);
		ctx.body = {
			status: 'success',
			data: word
		};
	} catch (err) {
		console.log(err);
	}
});

router.post(`${BASE_URL}`, async (ctx) => {
	try {
		const body = ctx.request.body;
		const translation = await queries.addSingleWord(ctx.request.body);
		if (translation.length) {
			ctx.status = 201;
			ctx.body = {
				status: 'success',
				data: word
			};
		} else {
			ctx.status = 400;
			ctx.body = {
				status: 'error',
				message: `Something went wrong ${JSON.stringify(word)}`
			};
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
