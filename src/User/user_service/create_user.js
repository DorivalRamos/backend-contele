const knex = require("../../database");
const { validationResult } = require("express-validator");
const user_repository = require("../../user_repository");

const create_user = async (req, res, next) => {
  const errors = await validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  } else {
    try {
      const createUser = await user_repository.create_user_repository(req.body);

      return res.status(201).send(createUser);
    } catch (error) {
      if (error.code.toString() === "23505") {
        return res.status(400).json("Endereço de e-mail já está em uso!");
      }

      next(error);
    }
  }
};

module.exports = { create_user };
