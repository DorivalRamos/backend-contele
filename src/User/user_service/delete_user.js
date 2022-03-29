const knex = require("../../database");
const find_user_by_id = require("../user_service/find_user_by_id");

const delete_user = async (req, res, next) => {
  const { id } = req.params;
  const user = await find_user_by_id.find_user_by_id(req, res);

  try {
    await knex("users")
      .update({
        isDeleted: true,
      })
      .where({ id });

    return res.status(200).json({ success: "Usuário deletado com sucesso!" });
  } catch (error) {
    next(error);
  }
};

module.exports = { delete_user };
