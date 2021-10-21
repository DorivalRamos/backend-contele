exports.up = function (knex) {};

exports.down = function (knex) {};
exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("username").unique().notNullable();
    table.text("userEmail").unique().notNullable();
    table.text("userPassword").unique().notNullable();
    table.timestamp("create_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
    table.boolean("drop").defaultTo("false");
  });

exports.down = (knex) => knex.schema.dropTable("users");
