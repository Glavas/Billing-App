const express = require("express");
const router = express.Router();
const bills = require("../app");

/* GET Test. */
router.get("/", function(req, res, next) {
  res.json(bills.bills);
});

module.exports = router;
