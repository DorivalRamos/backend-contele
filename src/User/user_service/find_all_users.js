const knex = require("../../database");

const find_all_users = async (req, res) => {
  const results = await knex("users").where({ isDeleted: false });

  if (!results[0]) {
    return res.status(404).json({ error: "Nenhum usuário encontrado!" });
  }
  return res.status(200).json(results);
};

module.exports = { find_all_users };
