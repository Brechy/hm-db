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

	describe('GET /cards', () => {
		it('should return all cards', (done) => {
			chai
				.request(server)
				.get('/cards')
				.end((err, res) => {
					should.not.exist(err);
					res.status.should.equal(200);
					res.type.should.equal('application/json');
					res.body.status.should.eql('success');
					res.body.data.length.should.eql(3);
					res.body.data[0].should.include.keys('id', 'english', 'hangul');
					done();
				});
		});
	});
});

//getAllCards test
//post english/hangul card to database
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
// 				should.not.exist(err);
// 				res.status.should.equal(200);
// 				res.type.should.equal('application/json');
// 				res.body.status.should.eql('success');
// 				done();
// 			});
// 	});
// });
