const knex = require("../../database");

const find_user_by_id = async (req, res) => {
  const { id } = req.params;
  const results = await knex("users").where({ id, isDeleted: false });

  if (!results[0]) {
    return res.status(404).json({ error: "Usuário não encontrado!" });
  }
  return res.status(200).json(results);
};

const find_user_by_id2 = async (id) => {
  const results = await knex("users").where({ id: id, isDeleted: false });
  if (!results[0]) {
    throw new Error("Usúario não encontrado!");
  }
  return results;
};

module.exports = { find_user_by_id, find_user_by_id2 };
