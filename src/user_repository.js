const knex = require("./database");
const find_user_by_id = require("./User/user_service/find_user_by_id");

const create_user_repository = async (User) => {
  const { userName, userPassword, userEmail } = User;

  await knex("users").insert({
    userName,
    userPassword,
    userEmail,
  });
  return User;
};

const update_user_repository = async (id, req) => {
  const { userName, userPassword, userEmail } = await req.body;

  const updatedUser = await knex("users").where({ id: id.id }).update({
    userName: userName,
    userEmail: userPassword,
    userPassword: userEmail,
  });

  return updatedUser;
};

module.exports = { create_user_repository, update_user_repository };
