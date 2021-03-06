exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("userName").notNullable();
    table.text("userEmail").unique().notNullable();
    table.text("userPassword").notNullable();
    table.timestamp("create_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
