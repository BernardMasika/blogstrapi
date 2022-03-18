module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bernard'),
        username: env('DATABASE_USERNAME', 'bernard'),
        password: env('DATABASE_PASSWORD', 'rawl'),
      },
      options: {
        ssl: false,
      },
    },
  },
});








// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
//       database: env('DATABASE_NAME'),
//       user: env('DATABASE_USER'),
//       password: env('DATABASE_PASSWORD'),
//     },
//   },
// });









// const path = require('path');
// const parse = require('pg-connection-string').parse;
//
// module.exports = ({ env }) => {
//
//   if (env('NODE_ENV') === 'production') {
//     const {host, port, database, password, user} = parse(process.env.DATABASE_URL)
//     return {
//       defaultConnection: "default",
//       connections: {
//         default: {
//           connector: "bookshelf",
//           settings: {
//             client: "postgres",
//             host,
//             port,
//             database,
//             username: user,
//             password,
//             ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false) },
//           },
//           options: {
//             ssl: false,
//           },
//         },
//       },
//     }
//   }
//
//   return {
//     connection: {
//       client: 'sqlite',
//       connection: {
//         filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//       },
//       useNullAsDefault: true,
//     },
//   }
// };
