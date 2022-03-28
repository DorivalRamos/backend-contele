const knex = require("./database");

module.exports = {
  async createUserRepository(User) {
    const { userName, userPassword, userEmail } = User;

    await knex("users").insert({
      userName,
      userPassword,
      userEmail,
    });
    return User;
  },
};
