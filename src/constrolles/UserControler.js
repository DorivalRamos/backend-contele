const knex = require("../database");


module.exports = {
  async hello (req,res){
    const hello = "hello world";
    return res.send(hello);
  },
  async getAllUsers(req, res) {
    const results = await knex("users");
    
    if(!results){
      res.send('404')
    }
    return res.json(results);
  },

  async getUsersById(req, res) {
    const {id} = req.params;
    const results = await knex("users").where({id})
    console.log(results)

    if(results === -1){
      res.send('400')
    }
    return res.json(results);
  },

  async create(req, res, next) {
    try {
      const { username, userPassword, userEmail } = req.body;
      await knex("users").insert({
        username,
        userPassword,
        userEmail,
      });

      return res.status(201).send(username, userPassword, userEmail);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { userName, userPassword, userEmail } = req.body;
      const { id } = req.params;
      await knex("users")
        .update({ userName, userEmail, userPassword })
        .where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).del();

      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async deleteAll(req, res, next) {
    try {
      await knex("users").del();

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
