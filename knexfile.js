const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');
require('dotenv').config();

module.exports = {
	test: {
		client: 'postgres',
		connection: process.env.DB_CONNECTION,
		migrations: {
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	},

	development: {
		client: 'postgres',
		connection: 'localhost',
		migrations: {
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	}
};
