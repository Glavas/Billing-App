const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const userToken = require("./user1");
const jwt = require("jsonwebtoken");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.urlencoded({ extended: false }));
/* GET bills */
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "webtech"
});

router.get("/", function(req, res, next) {
  connection.getConnection(function(err, con) {
    con.query(`SELECT * FROM bills WHERE userId = 1`, function(
      error,
      results,
      fields
    ) {
      if (err) throw err;
      con.release();
      res.json(results);
    });
  });
});

router.get("/category", function(req, res, next) {
  console.log(userToken);
  connection.getConnection(function(err, con) {
    con.query(`SELECT * FROM bills WHERE userId = 1 `, function(
      error,
      results,
      fields
    ) {
      if (err) throw err;
      con.release();
      res.json(results);
    });
  });
});

router.get("/:id", async (req, res) => {
  let billId = req.params.id;
  if (!billId) {
    return res
      .status(404)
      .send({ error: true, message: "please provide billId" });
  }
  try {
    connection.getConnection(function(err, con) {
      con.query(`SELECT * FROM bills WHERE id = ?`, billId, function(
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

router.post("/category/", async (req, res) => {
  let categoryId = req.body.id;
  let userId = req.body.userId;
  if (!categoryId) {
    return res
      .status(404)
      .send({ error: true, message: "please provide billId" });
  }
  try {
    connection.getConnection(function(err, con) {
      con.query(
        `SELECT * FROM bills WHERE userId = ${userId} AND (catId1=${categoryId} OR catId2=${categoryId} OR catId3=${categoryId})`,
        function(error, results, fields) {
          if (error) res.json(error);
          con.release();
          return res.send(results);
        }
      );
    });
  } catch (e) {
    res.json(e);
  }
});

router.post("/search", async (req, res) => {
  let data = req.body.name;
  if (!data) {
    return res
      .status(404)
      .send({ error: true, message: "please provide data" });
  }
  try {
    connection.getConnection(function(err, con) {
      con.query(
        `SELECT * FROM bills WHERE userId = 1 AND (kosten LIKE '%${data}%' OR name LIKE '%${data}%' OR beschreibung LIKE'%${data}%')`,
        function(error, results, fields) {
          if (error) res.json(error);
          con.release();
          return res.send(results);
        }
      );
    });
  } catch (e) {
    res.json(e);
  }
});

router.post("/insertBill", (req, res) => {
  let data = {
    userId: req.body.userId,
    kosten: req.body.kosten,
    name: req.body.name,
    beschreibung: req.body.beschreibung,
    catId1: req.body.catId1,
    catId2: req.body.catId2,
    catId3: req.body.catId3
  };

  try {
    connection.getConnection(function(err, con) {
      con.query(`INSERT INTO bills SET ?`, data, function(
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

router.put("/updateBill", (req, res) => {
  console.log(req.body);
  let data = req.body;
  try {
    connection.getConnection(function(err, con) {
      con.query(`UPDATE bills SET ? WHERE id = ${data.id}`, data, function(
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

router.delete("/deleteBill/:id", (req, res) => {
  let billId = req.body.id;
  if (!billId) {
    return res
      .status(400)
      .send({ error: true, message: "please provide billId" });
  }
  connection.getConnection(function(err, con) {
    con.query(`DELETE FROM bills WHERE id =  ?`, billId, (err, result) => {
      if (err) throw err;
      console.log(result);
      con.release();
    });
  });
});

router.post("/api/tester", (req, res) => {
  var token = req.cookies.auth;

  // decode token
  if (token) {

    jwt.verify(token, 'secretkey', function(err, token_data) {
      if (err) {
         return res.status(403).send('Error');
      } else {
        
        req.user_data = token_data;
        let uid = token_data.user.id;
        connection.getConnection(function(err, con) {
          con.query(`SELECT * FROM bills WHERE userId = ${uid}`, function(
            error,
            results,
            fields
          ) {
            if (err) throw err;
            con.release();
            res.json(results);
          });
        });
      }
    });

  } else {
    return res.status(403).send('No token');
  }
});

router.get("/api/allBills", (req, res) => {
  var token = req.cookies.auth;

  // decode token
  if (token) {

    jwt.verify(token, 'secretkey', function(err, token_data) {
      if (err) {
         return res.status(403).send('Error');
      } else {
      
        req.user_data = token_data;
        let uid = token_data.user.id;
        connection.getConnection(function(err, con) {
          con.query(`SELECT * FROM bills WHERE userId = ${uid}`, function(
            error,
            results,
            fields
          ) {
            if (err) throw err;
            con.release();
            res.json(results);
          });
        });
      }
    });

  } else {
    return res.status(403).send('No token');
  }
});

module.exports = router;