const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const logger = require('koa-morgan');
const cors = require('@koa/cors');

const usersRouter = require('./server/routes/users');
const cardsRouter = require('./server/routes/cards');

require('dotenv').config();

const app = new Koa();
app.use(logger());
app.use(bodyParser);
app.use(cors());

console.log(process.env.PRIVATE_KEY)

const PORT = process.env.PORT || 1337;

app.use(usersRouter.routes());
app.use(cardsRouter.routes());

const server = app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

module.exports = server;
