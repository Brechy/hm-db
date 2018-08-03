const koa = require('koa');
const app = koa();

app.use(ctx => {
  ctx.body = 'HELLO FROM KOA.JS!';
})

app.listen(3003, function() {
  console.log('listening on port 3003...');
})
