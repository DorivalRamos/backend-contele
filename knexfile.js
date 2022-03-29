// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    version: "7.2",
    connection: {
      host: process.env.HOST_ENV,
      port: process.env.DBPORT_ENV,
      user: process.env.USER_ENV,
      password: process.env.PASSWORD_ENV,
      database: process.env.DATABASE_ENV,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
