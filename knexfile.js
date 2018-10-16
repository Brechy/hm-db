const path = require('path')
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db')
require('dotenv').config()

console.log(process.env.DB_CONNECTION)

module.exports = {
  test: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'hm-db_test'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'hm-db'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  production: {
    client: 'postgres',
    connection: process.env.DB_CONNECTION,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
}
