const express = require("express");
const database = require("./config/database");
require("dotenv").config();
database.connect();
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
const app = express();
const port = process.env.PORT;
// app.use(morgan("combined"));
const systemConfig = require("./config/system");
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
route(app);
routeAdmin(app); 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
