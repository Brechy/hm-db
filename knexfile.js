const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
	test: {
		client: 'postgres',
		connection: 'hmdatabse.cytcq4hrzcsy.us-west-1.rds.amazonaws.com',
		migrations: {
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	},

	development: {
		client: 'postgres',
		connection: 'hmdatabse.cytcq4hrzcsy.us-west-1.rds.amazonaws.com',
		migrations: {
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	}
};
