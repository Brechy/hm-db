const Koa = require('koa');
const logger = require('koa-morgan');
const bodyParser = require('koa-body')();
const usersRouter = require('./server/routes/users');
const cardsRouter = require('./server/routes/cards');

require('dotenv').config();

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(usersRouter.routes());
app.use(cardsRouter.routes());

const server = app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

module.exports = server;
