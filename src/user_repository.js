const knex = require("./database");
const bcrypt = require("bcrypt");

const create_user_repository = async (User) => {
  const { userName, userPassword, userEmail } = User;

  const hashedPassword = await bcrypt.hash(userPassword, 10);

  await knex("users").insert({
    userName,
    userPassword: hashedPassword,
    userEmail,
  });
  return User;
};

const update_user_repository = async (id, req) => {
  const { userName, userPassword, userEmail } = await req.body;
  const hashedPassword = await bcrypt.hash(userPassword, 10);
  const updatedUser = await knex("users").where({ id: id.id }).update({
    userName: userName,
    userEmail: userEmail,
    userPassword: hashedPassword,
  });

  return updatedUser;
};

module.exports = { create_user_repository, update_user_repository };
