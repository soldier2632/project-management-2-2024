const express = require("express");
const database = require("./config/database");
require("dotenv").config();
database.connect();
const route = require("./routes/client/index.route");
const app = express();
const port = process.env.PORT;
// app.use(morgan("combined"));
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
