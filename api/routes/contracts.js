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

/* GET contracts */
router.get("/", function(req, res, next) {
  connection.getConnection(function(err, con) {
    con.query(`SELECT * FROM contracts`, function(error, results, fields) {
      if (err) throw err;
      con.release();
      res.json(results);
    });
  });
});

router.get("/:id", async (req, res) => {
  let contractId = req.params.id;
  if (!contractId) {
    return res
      .status(404)
      .send({ error: true, message: "please provide contractId" });
  }
  try {
    connection.getConnection(function(err, con) {
      con.query(`SELECT * FROM contracts WHERE id = ?`, contractId, function(
        error,
        results,
        fields
      ) {
        if (error) throw error;
        con.release();
        return res.send(results[0]);
      });
    });
  } catch (e) {
    res.send(e);
  }
});

router.post("/insertContract", (req, res) => {
  let data = {
    userId: req.body.userId,
    laufzeitBis: req.body.laufzeitBis,
    kosten: req.body.kosten,
    name: req.body.name,
    beschreibung: req.body.beschreibung,
    catId1: req.body.catId1,
    catId2: req.body.catId2,
    catId3: req.body.catId3
  };

  try {
    connection.getConnection(function(err, con) {
      con.query(`INSERT INTO contracts SET ?`, data, function(
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

router.put("/updateContract", (req, res) => {
  console.log(req.body)
  let data = req.body;
  try {
    connection.getConnection(function(err, con) {
      con.query(`UPDATE contracts SET ? WHERE id = ${data.id}`, data, function(
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

router.delete("/deleteContract/:id", (req, res) => {
  let contractId = req.body.id;
  if (!contractId) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide contractId" });
  }
  connection.getConnection(function(err, con) {
    con.query(
      `DELETE FROM contracts WHERE id =  ?`,
      contractId,
      (err, result) => {
        if (err) throw err;
        console.log(result);
        con.release();
      }
    );
  });
});

module.exports = router;
