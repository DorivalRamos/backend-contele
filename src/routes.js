const express = require("express");

const routes = express.Router();

const UserController = require("./middlewares/UserControler");
const registerSchema = require("./middlewares/register-schema");

routes.get("api-docs");
routes.get("/api/v1/hellow", UserController.hello)
routes.get("/api/v1/users", UserController.getAllUsers)
routes.post("/api/v1/users",registerSchema, UserController.create);
routes.delete("/api/v1/users", UserController.deleteAll);
routes.get("/api/v1/usersById/:id", UserController.getUsersById);
routes.put("/api/v1/users/:id", UserController.update);
routes.delete("/api/v1/users/:id", UserController.delete);

module.exports = routes;
