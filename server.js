const express = require("express");
require("dotenv").config();
const routes = require("./routes");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");

const app = express();
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
const port = process.env.PORT_ENV;
//notFound
app.use((req, res, next) => {
  const error = new Error("NotFound");
  error.status = 404;
  next(error);
});
//catch all
app.use((error, req, res, next) => {
  //error 500 internal server error
  res.status(error.status || 500);
  res.json({ error: error.message });
});
app.listen(port, () => console.log("server is running"));
