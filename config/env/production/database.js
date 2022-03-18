const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});





















// const { parse } = require("pg-connection-string");
//
// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));
//
//   return {
//     defaultConnection: "default",
//     connections: {
//       default: {
//         connector: "bookshelf",
//         settings: {
//           client: "postgres",
//           host,
//           port,
//           database,
//           username: user,
//           password,
//           ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false) },
//         },
//         options: {
//           ssl: env.bool('DATABASE_SSL', false),
//         },
//       },
//     },
//   };
// };
