process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server');
const knex = require('../server/db/connection');

describe('routes: cards', () => {
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
});

describe('GET /cards', () => {
	it('should return all cards', (done) => {
		chai.request(server)
			.get('/cards')
			.end((err, res) => {
				should.not.exist(err);
				res.status.should.equal(200);
				res.type.should.equal('application/json');
				res.body.status.should.eql('success');
				res.body.data.length.should.eql();
				res.body.data[0].should.include.keys('id', 'english', 'hangul');
			});
		done();
	});
});
//
// describe('POST /cards', () => {
// 	it('should return the card that was added', (done) => {
// 		chai
// 			.request(server)
// 			.post('/cards')
// 			.send({
// 				english: 'Hello',
// 				hangul: '여보세요',
// 				score: '5'
// 			})
// 			.end((err, res) => {
// 				//there should be no errors
// 				should.not.exist(err);
// 				//there should be a 201 'created' status code
// 				res.status.should.equal(201);
// 				//the response should be json
// 				res.type.should.equal('application/json');
// 				//the json response should have
// 				//key-value pair of {'status': 'success'}
// 				res.body.status.should.equal('success');
// 				//the json response body should have
// 				//key-value pair of {'data': 1 card object}
// 				res.body.data[0].should.include.keys(
// 					'id',
// 					'english',
// 					'hangul',
// 					'score'
// 				);
// 				it('should throw an error if the payload is malformed', (done) => {
// 					chai
// 						.request(server)
// 						.post('/cards')
// 						.send({
// 							english: 'Hello'
// 						})
// 						.end((err, res) => {
// 							// there should an error
// 							should.exist(err);
// 							// there should be a 400 status code
// 							res.status.should.equal(400);
// 							// the response should be JSON
// 							res.type.should.equal('application/json');
// 							// the JSON response body should have a
// 							// key-value pair of {"status": "error"}
// 							res.body.status.should.eql('error');
// 							// the JSON response body should have a message key
// 							should.exist(res.body.message);
// 							done();
// 						});
// 				});
// 			});
// 	});
// });
