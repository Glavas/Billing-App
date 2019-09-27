const express = require("express");
const router = express.Router();
const users = require("../app.js");

/* GET users listing (alle User). */
router.get("/", function(req, res, next) {
  res.json(users.user);
});

module.exports = router;
