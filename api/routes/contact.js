const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.urlencoded({ extended: false }));
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "webtech"
});

router.post("/insertMessage", (req, res) => {
  let data = {
    username: req.body.username,
    email: req.body.email,
    message: req.body.message
  };
  try {
    connection.getConnection(function(err, con) {
      con.query(`INSERT INTO contactData SET ?`, data, function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        con.release();
        return res.send({
          results
        });
      });
    });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
