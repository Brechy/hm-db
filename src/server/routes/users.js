const Router = require('koa-router');
const queries = require('../db/queries/users');
const jwt = require('jsonwebtoken');

const router = new Router();

//post login user
router.post('/login', async (ctx) => {
  try {
		const body = ctx.request.body;
    const valid = await queries.validateUser(body.username, body.password);
    if (!valid) {
      ctx.body = {
        status: 'failure'
      }
      return
    }
    //generate jwt
		const cert = process.env.PRIVATE_KEY

		const supesLegit = jwt.sign({ username: body.username }, cert, {
      algorithm: 'RS256'
    });
    ctx.body = {
      status: 'success',
      data: supesLegit
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

router.delete('/users', async (ctx) => {
	try {
		const remove = await queries.deleteUser();
		ctx.body = {
			status: 'success'
		}
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
