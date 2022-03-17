const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: env('DATABASE_HOST', 'ec2-52-214-125-106.eu-west-1.compute.amazonaws.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'd4d2s9lbg72akt'),
          username: env('DATABASE_USERNAME', 'glzbturqmtjqau'),
          password: env('DATABASE_PASSWORD', '6f009bb3ec8bacac0c8105da9534d8be6c94615e5a4c57fdbb52d665a365cb57'),
          ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false) },
        },
        options: {
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    },
  };
};
