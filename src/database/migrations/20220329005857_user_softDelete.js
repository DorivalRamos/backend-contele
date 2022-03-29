exports.up = (knex) =>
  knex.schema.table("users", (table) => {
    table.boolean("isDeleted").defaultTo(false);
  });
exports.down = function (knex) {
  knex.schema.table("users", (table) => {
    table.dropColumn("isDeleted");
  });
};
