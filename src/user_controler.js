const knex = require("./database");
const { validationResult } = require("express-validator");

const UserRepository = require("./user_repository");

const hello = async (req, res) => {
  const hello = "hello world";
  return res.send(hello);
};

module.exports = { hello };
