const express = require("express");
const { application_name } = require("pg/lib/defaults");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

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
app.listen(3333, () => console.log("server is running"));
