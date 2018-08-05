process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../server');

describe('routes: server', () => {
	describe('GET /', () => {
		it('should return json', (done) => {
			chai
				.request(server)
				.get('/')
				.end((err, res, next) => {
					should.not.exist(err);
					res.status.should.equal(200);
					res.body.status.should.equal('successfulness!');
					done();
				});
		});
	});
});
