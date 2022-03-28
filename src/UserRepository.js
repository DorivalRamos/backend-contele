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

  async UpdateUserRepository(id, results, user, res) {
    results.userName = user.userName ? user.userName : results.userName;
    results.userEmail = user.userEmail ? user.userEmail : results.userEmail;
    results.userPassword = user.userPassword
      ? user.userPassword
      : results.userPassword;

    const updatedUser = await knex("users")
      .update({
        userName: results.userName,
        userEmail: results.userEmail,
        userPassword: results.userPassword,
      })
      .where({ id });

    return results;
  },
};
