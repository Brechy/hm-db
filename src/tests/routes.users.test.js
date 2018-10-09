'use strict'

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));

const knex = require('../server/db/connection');
const app = require('../server.js');

describe('routes: users', () => {
	beforeEach(() => {
		return knex.migrate
			.rollback()
			.then(() => {
				return knex.migrate.latest();
			})
			.then(() => {
				return knex.seed.run();
			});
	});

	afterEach(() => {
		return knex.migrate.rollback();
	});

  //GET - list of all users
  it('Should return all users', function() {
    return chai.request(app)
    .get('/users')
    .then(function(res) {
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
    })
  })

  //GET - 404 not found
  it('should return 404 Not Found', function() {
    return chai.request(app)
    .get('/INVALID_PATH')
    .then(function(res) {
      throw new Error('Path exists!');
    })
    .catch(function(err) {
      expect(err).to.have.status(404);
    })
  })

  //POST - new user (adds user when run locally)
  it('should add new user', function() {
    return chai.request(app)
    .post('/users')
    .send({
      username: 'chaitest',
      password: 'chaipassword'
    })
    .then(function(res) {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
      expect(res.body).to.be.an('object');
    })
  })

  //DELETE - delete a user
  it('should delete a user', function() {
    return chai.request(app)
    .delete('/users')
    .send({
      id: 31
    })
    .then(function(res) {
      expect(res).to.have.status(201);
      expect(res).to.be.json;
    })
  })
})
