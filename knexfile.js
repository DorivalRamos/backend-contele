// Update with your config settings.

module.exports = ({
  development :{
      client: 'pg',
      version: '7.2',
      connection: {
        host : 'pgsql',
        port : 5432,
        user : 'pguser',
        password : 'pgpassword',
        database : 'knex_test'
      },
      migrations: {
        tableName: "knex_migrations",
        directory: `${__dirname}/src/database/migrations`,
      },
      seeds: {
        directory: `${__dirname}/src/database/seeds`,
      },}
  
});

