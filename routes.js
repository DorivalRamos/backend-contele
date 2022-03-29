const express = require("express");

const routes = express.Router();

const registerSchema = require("./src/register-schema");
const user_controller = require("./src/user_controller");

const find_user_by_id = require("./src/User/user_service/find_user_by_id");
const create_user = require("./src/User/user_service/create_user");
const update_user = require("./src/User/user_service/update_user");
const find_all_users = require("./src/User/user_service/find_all_users");
const delete_user = require("./src/User/user_service/delete_user");
const delete_all_users = require("./src/User/user_service/delete_all_users");

routes.get("api-docs");
routes.get("/api/v1/", user_controller.hello);

routes.delete("/api/v1/users", delete_all_users.delete_all_users);
routes.delete("/api/v1/users/:id", delete_user.delete_user);
routes.get("/api/v1/users", find_all_users.find_all_users);
routes.get("/api/v1/users/:id", find_user_by_id.find_user_by_id);
routes.put("/api/v1/users/:id", registerSchema, update_user.update_user);
routes.post("/api/v1/users", registerSchema, create_user.create_user);
module.exports = routes;
