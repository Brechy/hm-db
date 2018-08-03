const koa = require('koa');

const server = new koa();

server
  .use(ctx => {
  ctx.body = 'I AM YOUR FIRST KOA.JS API!!'
})
.listen(3001)
