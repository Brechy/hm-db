const Router = require('koa-router');
const router = new Router();

router.get('/users', async (ctx) => {
	ctx.body = {
		status: 'successfulness!',
		message: 'Hello, World!'
	};
});

module.exports = router;
