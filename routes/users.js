const Router = require('koa-router');
const bodyParser = require('koa-body')();
const ctrl = require('../controllers/users');

const router = new Router();

router.get('/users', ctrl.getAll);

router.get('/users/:id', async (ctx) => {
	const user = await models.User.findOne({ where: { id: ctx.params.id } });
	ctx.body = {
		user
	};
});

router.post('/users', bodyParser, async (ctx) => {
	const user = await models.User.create(ctx.request.body.user);
	ctx.body = {
		user
	};
});

module.exports = router.routes();
