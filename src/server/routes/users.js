const Router = require('koa-router');
const queries = require('../db/queries/users');

const router = new Router();

//post login user
router.post('/login', async (ctx) => {
  try {
    const valid = await queries.validateUser();
    if (!valid) {
      ctx.body = {
        status: 'failure'
      }
      return
    }
    //generate jwt
		const cert = process.env.PRIVATE_KEY
    const jwt = jwt.sign({ username:user.username }, cert, {
      algorithm: 'RS256'
    },
		function(err, token) {
      console.log(token);
    });
    ctx.body = {
      status: 'success',
      data: jwt
    }
  } catch (err) {
    console.log(err)
  }
})

router.get('/users', async (ctx) => {
  try {
    const users = await queries.getAllUsers();
    ctx.body = {
      status: 'success',
      data: users
    };
  } catch (err) {
    console.log(err);
  }
});

router.post('/users', async (ctx) => {
  try {
    const body = ctx.request.body;
    console.log(ctx.request.body)
    const users = await queries.addSingleUser(ctx.request.body);
    if (users.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success'
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: `Something went wrong ${JSON.stringify(users)}`
      };
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
