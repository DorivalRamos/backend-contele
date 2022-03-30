const knex = require("../../database");
const find_user_by_id = require("./find_user_by_id");
const user_repository = require("../../user_repository");

const update_user = async (req, res, next) => {
  const id = req.params;

  try {
    const is_exist = await find_user_by_id.find_user_by_id2(id.id);
    const updatedUser = await user_repository.update_user_repository(id, req);
    return res.status(201).json({ success: "Usuario Atualizado com sucesso" });
  } catch (error) {
    if (error.code.toString() === "23505") {
      return res.status(400).json("Endereço de e-mail já está em uso!");
    }
    next(error);
  }
};

module.exports = { update_user };
