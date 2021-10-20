exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "dorival",
          userPassword: "dorival",
          userEmail: "dorival@email.com",
        },
        {
          username: "alessandra",
          userPassword: "alessandra",
          userEmail: "alessandra@email.com",
        },
        {
          username: "vladimir",
          userPassword: "vladimir",
          userEmail: "vladimir@email.com",
        },
      ]);
    });
};
