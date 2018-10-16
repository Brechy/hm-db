process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server');
const knex = require('../server/db/connection');

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

describe('POST /login', function() {
    it('should give success status if credential is valid', (done) => {
      chai.request(server)
        .post('/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          username: 'username',
          password: 'password'
      })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200)
          res.type.should.equal('application/json')
          done();
        })
    });
});

	describe('POST /users', () => {
		it('should POST a user to the database', (done) => {
			chai.request(server)
				.post('/users')
				.send({
					username: 'peterpan2',
					password: 'test2'
				})
				.end((err, res) => {
					should.not.exist(err);
					res.status.should.equal(201);
					res.type.should.equal('application/json');
					res.body.status.should.eql('success');
					done();
				});
		});
	});

	describe('GET /users', () => {
		it('should GET all users', (done) => {
			chai.request(server)
				.get('/users')
				.end((err, res) => {
					should.not.exist(err);
					res.status.should.equal(200);
					res.type.should.equal('application/json');
					res.body.status.should.eql('success');
					res.body.data.length.should.eql(3);
					res.body.data[0].should.include.keys('id', 'username', 'password');
					done();
				});
		});
	});
});
