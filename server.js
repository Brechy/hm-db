const Koa = require('koa');
const logger = require('koa-morgan');
const bodyParser = require('koa-body')();

const server = new Koa();

const usersRouter = require('./routes/users');
console.log(usersRouter);

server
	.use(logger('tiny'))
	.use(usersRouter)
	.listen(3001);
