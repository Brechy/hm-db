const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
	test: {
		client: 'postgres',
		connection: 'postgres://corina:@localhost:1337/hmdb',
		migrations: {
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	},

	development: {
		client: 'postgres',
		connection: 'postgres://corina:@localhost:1337/hmdb',
		migrations: {
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	}
};
