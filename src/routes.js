const express = require("express");

const routes = express.Router();

const UserController = require("./constrolles/UserControler");

routes.get("/users", UserController.index);

module.exports = routes;
