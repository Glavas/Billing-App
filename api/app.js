const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const userRouter = require("./routes/user");
const billsRouter = require("./routes/bills");
const contractsRouter = require("./routes/contracts");
const categoriesRouter = require("./routes/categories");
const testAPIRouter = require("./routes/testAPI");
const user1Router = require("./routes/user1");
const contactRouter = require ("./routes/contact");
const app = express();
const jwt = require("jsonwebtoken");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/contact", contactRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);
app.use("/testAPI", testAPIRouter);
app.use("/bills", billsRouter);
app.use("/contracts", contractsRouter);
app.use("/categories", categoriesRouter);
app.use("/user1", user1Router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

module.exports = app;
