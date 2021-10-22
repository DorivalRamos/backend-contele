const express = require("express");

const routes = express.Router();

const UserController = require("./constrolles/UserControler");

routes.get("/api/v1/users", UserController.getAllUsers)
routes.get("/api/v1/usersById/:id", UserController.getUsersById);
routes.post("/api/v1/users", UserController.create);
routes.put("/api/v1/users/:id", UserController.update);
routes.delete("/api/v1/users/:id", UserController.delete);
routes.delete("/api/v1/users", UserController.deleteAll);

module.exports = routes;
