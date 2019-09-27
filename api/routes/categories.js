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

/* GET categories */
router.get("/", function(req, res, next) {
  connection.getConnection(function(err, con) {
    if (err) throw err;
    con.query(`SELECT * FROM categories`, function(err, result, fields) {
      con.release();
      if (err) throw err;
      res.json(result);
    });
  });
});

router.get("/:id", async (req, res) => {
  let categoryId = req.params.id;
  if (!categoryId) {
    return res
      .status(404)
      .send({ error: true, message: "please providec categoryId" });
  }
  try {
    connection.getConnection(function(err, con) {
      con.query(`SELECT * FROM categories WHERE id = ?`, categoryId, function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        con.release();
        return res.json(results[0]);
      });
    });
  } catch (e) {
    res.send(e);
  }
});

router.post("/insertCategory", (req, res) => {
  let data = {
    name: req.body.name,
    userId: 1
  };

  try {
    connection.getConnection(function(err, con) {
      con.query(`INSERT INTO categories SET ?`, data, function(
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

router.delete("/deleteCategory/:id", (req, res) => {
  let categoryId = req.body.id;
  if (!categoryId) {
    return res
      .status(400)
      .send({ error: true, message: "please provide categoryId" });
  }
  connection.getConnection(function(err, con) {
    con.query(
      `DELETE FROM categories WHERE id =  ?`,
      categoryId,
      (err, result) => {
        if (err) throw err;
        console.log(result);
        con.release();
      }
    );
  });
});

module.exports = router;
