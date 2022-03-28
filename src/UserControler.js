const knex = require("./database");
const { validationResult } = require("express-validator");

const UserRepository = require("./UserRepository");

module.exports = {
  async hello(req, res) {
    const hello = "hello world";
    return res.send(hello);
  },
  async getAllUsers(req, res) {
    const results = await knex("users");

    if (!results) {
      res.send("404");
    }
    return res.json(results);
  },

  async getUsersById(req, res) {
    const { id } = req.params;
    const results = await knex("users").where({ id });

    if (results === -1) {
      res.send(400);
    }
    return res.json(results);
  },

  async create(req, res, next) {
    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    } else {
      try {
        const createUser = await UserRepository.createUserRepository(req.body);

        return res.status(201).send(createUser);
      } catch (error) {
        if (error.code.toString() === "23505") {
          return res.status(400).json("Endereço de e-mail já está em uso!");
        }

        next(error);
      }
    }
  },

  async update(req, res, next) {
    const { id } = req.params;
    const user = req.body;
    const results = await knex("users").where({ id });

    try {
      const updatedUser = await UserRepository.UpdateUserRepository(
        id,
        results,
        user
      );

      return res.json("Usuario Atualizado com sucesso");
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).del();

      return res.send(200);
    } catch (error) {
      next(error);
    }
  },

  async deleteAll(req, res, next) {
    try {
      await knex("users").del();

      return res.send(200);
    } catch (error) {
      next(error);
    }
  },
};
