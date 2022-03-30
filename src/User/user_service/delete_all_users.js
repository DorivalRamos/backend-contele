const knex = require("../../database");
const find_user_by_id = require("../user_service/find_user_by_id");

const delete_all_users = async (req, res, next) => {
  try {
    await knex("users")
      .update({
        isDeleted: true,
      })
      .where({});

    return res
      .status(200)
      .json({ success: "Todos os usuarios foram deletados com sucesso!" });
  } catch (error) {
    next(error);
  }
};

module.exports = { delete_all_users };
