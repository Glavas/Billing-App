const express = require("express");
const jwt = require("jsonwebtoken");
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

router.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API"
  });
});

router.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post request",
        authData
      });
    }
  });
});
router.post("/api/getAllBills", (req,res))
router.post("/api/login", (req, res) => {
  try {
    connection.getConnection(function (err, con) {
      con.query(
        `SELECT id FROM users  WHERE email = '${req.body.email}' AND password = '${req.body.password}'`,
        function (error, results, fields) {
          if (error) throw error;
          con.release();
          if (results[0] == undefined){
            res.json({
              login: false,
            });
          } else {
            let user = results[0];
            console.log(user);
            jwt.sign({ user: user }, "secretkey", (err, token) => {
              res.cookie('auth', token);
              res.json({
                login: true,
                token: token
              });
            });
          } 
        }
      );
    });
  } catch (e) {
    res.json({
      login: false,
    });
  }
});

//token

//Function verify token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  //Check if not undefined
  if (typeof bearerHeader !== "undefined") {
    //Split at space
    const bearer = bearerHeader.split(" ");
    //Get token from array
    const bearerToken = bearer[1];
    //Set the token
    req.token = bearerToken;
    //next middleware
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

router.post("/api/logout", (req, res) => {
  res.clearCookie('auth');
  res.json({
    message: "logout"
  })
});

module.exports = router;