const express = require("express");
var methodOverride = require("method-override");
const database = require("./config/database");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("express-flash");
require("dotenv").config();
database.connect();

const route = require("./routes/client/index.route");

const routeAdmin = require("./routes/admin/index.route");

const systemConfig = require("./config/system");
const app = express();

const port = process.env.PORT;
// app.use(morgan("combined"));
//App locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.static(`${__dirname}/public`));
console.log(__dirname);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("PATCH"));
app.use(methodOverride("DELETE"));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
//flash
app.use(cookieParser('keyboard cat'));
  app.use(session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
//End flash
//Routes
route(app);
routeAdmin(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
