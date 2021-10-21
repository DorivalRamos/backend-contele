// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    version: "7.2",
    connection: {
      host: "localhost",
      database: "knex_test",
      user: "pguser",
      password: "pgpassword",
      port: 5432,
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
