const Koa = require('koa')
const logger =  require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require('koa-body')()

const models = require('./models')

const server = new Koa()
const router = new Router()

router.get('/Users', async ctx => {
  const users = await models.User.findAll()
  ctx.body = {
    users
  }
});

router.get('/users/:id', async ctx => {
  const user = await models.User.findOne({ where: { id: ctx.params.id }})
  ctx.body = {
    user
  }
})

router.post('/users', bodyParser, async ctx => {
  const user =await models.User.create(ctx.request.body.user)
    ctx.body = {
    user
  }
})

router.del

server
  .use(logger('tiny'))
  .use(router.routes())
  .listen(3001)
