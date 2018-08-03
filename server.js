const koa = require('koa')
const logger =  require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require('koa-body')()

const server = new koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body ='I AM ROOT! LULZ'
});

router.get('/second_route', ctx => {
  ctx.body = 'I AM second_route'
})

router.post('/something', ctx => {
  ctx.body = {
    something: 'something here'
  }
})

server
  .use(logger('tiny'))
  .use(router.routes())
  .listen(3001)
