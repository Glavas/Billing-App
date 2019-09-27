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

router.post()

router.get("/", function(req, res, next) {
  connection.getConnection(function(err, con) {
    if (err) throw err;
    con.query("SELECT * FROM users", function(err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
  });
});

router.get("/:id", async (req, res) => {
  let userId = req.params.id;
  if (!userId) {
    return res
      .status(404)
      .send({ error: true, message: "please provide userId" });
  }

  try {
    connection.getConnection(function(err, con) {
      con.query(`SELECT * FROM users WHERE id = ${userId}`, function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        con.release();
        return res.send({
          data: results[0]
        });
      });
    });
  } catch (e) {
    res.send(e);
  }
});

router.post("/insertUser", (req, res) => {
  let data = {
    username: req.body.username,
    firstName: req.body.firstName,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  try {
    connection.getConnection(function(err, con) {
      con.query(`INSERT INTO users SET ?`, data, function(
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
router.post("/search", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email) {
    return res.status(404).send(false);
  }
  try {
    connection.getConnection(function(err, con) {
      con.query(
        `SELECT * FROM users WHERE email = ${email} AND password = ${password}`,
        function(error, results, fields) {
          if (error) res.json(false);
          con.release();
          return res.send(true);
        }
      );
    });
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
