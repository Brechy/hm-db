const Router = require('koa-router')
const queries = require('../db/queries/cards')
const fetch = require('node-fetch')
const cached = require('../db/queries/cached.js')

const router = new Router()
const BASE_URL = '/cards'

//get all cards from the database
router.get(`${BASE_URL}`, async ctx => {
  try {
    const cards = await queries.getAllCards()
    ctx.body = {
      status: 'success',
      data: cards
    }
  } catch (err) {
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async ctx => {
  try {
    const card = await queries.getSingleCard(ctx.params.id)
    ctx.body = {
      status: 'success',
      data: card
    }
  } catch (err) {
    console.log(err)
  }
})

//get translated korean word from Naver API
//check cached db table for existing translations
router.get(`${BASE_URL}/translate/:english`, async ctx => {
  let cachedTranslation = await cached.getSingleWord(ctx.params.english)
  if (cachedTranslation) {
    ctx.status = 200
    ctx.body = {
      status: 'success',
      english: ctx.params.english,
      hangul: cachedTranslation.hangul,
      cached: 'This is a cached result'
    }
    return
  }
  let response = await fetch(process.env.NAVER_API, {
    method: 'POST',
    body: `source=en&target=ko&text=${encodeURIComponent(ctx.params.english)}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
    }
  })
  let json = await response.json()
  //save translated response to cache for later use
  await cached.addSingleWord(
    ctx.params.english,
    json.message.result.translatedText
  )

  console.log(json)
  console.log(process.env)
  ctx.status = 200
  ctx.body = {
    status: 'success',
    english: ctx.params.english,
    hangul: json.message.result.translatedText,
    cached: 'This is a Naver result'
  }
})

//add single english/korean card to database/cards
router.post(BASE_URL, async ctx => {
  try {
    const body = ctx.request.body
    const card = await queries.addSingleCard(ctx.request.body)
    if (card.length) {
      ctx.status = 201
      ctx.body = {
        status: 'success',
        data: card
      }
    } else {
      ctx.status = 400
      ctx.body = {
        status: 'error',
        message: `Something went wrong ${JSON.stringify(card)}`
      }
    }
  } catch (err) {
    console.log(err)
  }
})

router.delete(`${BASE_URL}/:id`, async ctx => {
  try {
    const card = await queries.deleteCard(ctx.params.id)
    if (card.length) {
      ctx.status = 200
      ctx.body = {
        status: 'success',
        data: card
      }
    } else {
      ctx.status = 400
      ctx.body = {
        status: 'error',
        message: 'That card does not exist'
      }
    }
  } catch (err) {
    ctx.status = 400
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred'
    }
  }
})

module.exports = router
