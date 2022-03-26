exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          userName: "dorival",
          userPassword: "dorival",
          userEmail: "dorival@email.com",
        },
        {
          userName: "alessandra",
          userPassword: "alessandra",
          userEmail: "alessandra@email.com",
        },
        {
          userName: "vladimir",
          userPassword: "vladimir",
          userEmail: "vladimir@email.com",
        },
      ]);
    });
};
