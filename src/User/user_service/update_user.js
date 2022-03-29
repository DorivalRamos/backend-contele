const knex = require("../../database");
const find_user_by_id = require("./find_user_by_id");
const user_repository = require("../../user_repository");

const update_user = async (req, res, next) => {
  const user = req.body;
  const results = await find_user_by_id.find_user_by_id(req, res);
  try {
    const updatedUser = await user_repository.UpdateUserRepository(
      results,
      user
    );

    return res
      .status(201)
      .json({ success: "Usuario Atualizado com sucesso", updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = { update_user };
