const path = require('path');
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {

  if (env('NODE_ENV') === 'production') {
    const {host, port, database, password, user} = parse(process.env.DATABASE_URL)
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host,
            port,
            database,
            username: user,
            password,
            ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false) },
          },
          options: {
            ssl: false,
          },
        },
      },
    }
  }

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  }
};
