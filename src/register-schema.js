const { body } = require("express-validator");

const registerSchema = [
  body("userName")
    .isLength({ min: 3, max: 20 })
    .withMessage("O nome do usuario deve conter entre 3 e 20 Caracteres")
    .isString(),
  body("userEmail")
    .isEmail()
    .isLength({ min: 3, max: 100 })
    .withMessage("Insira um email Valido"),
  body("userPassword")
    .isLength({ min: 5, max: 50 })
    .withMessage("A senha deve conter entre 5 e 50 Caracteres")
    .isString(),
];

module.exports = registerSchema;
