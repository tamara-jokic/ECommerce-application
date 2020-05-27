const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const dbPath = path.join(__dirname, "moc", "db.json");
let data = fs.readFileSync(dbPath);
let users = JSON.parse(data);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.get("/api/getUsers", (req, res) => {
  res.send(users.user);
});

app.get("/api/getPopular", (req, res) => {
  res.send(users.popular);
});

app.get("/api/getDiscount", (req, res) => {
  res.send(users.discount);
});

app.get("/api/fetchKarate", (req, res) => {
  res.send(users.karate);
});

app.post("/api/logOut", (req, res) => {
  const filteredUsers = users.user.map((user) => {
    if (user.token) {
      delete user["token"];
    }
    return user;
  });
  users.user = filteredUsers;
  let data = JSON.stringify(users, null, 2);
  fs.writeFile("./moc/db.json", data, finished);
  function finished(err) {
    if (err) res.send(err);
  }

  res.send(users.user);
});

app.get("/api/getUser", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email) {
    let user = users.user.find((user) => user.email === email);
    if (user != undefined) {
      if (user.password === password) {
        jwt.sign({ user }, "secretkey", (err, token) => {
          user.token = token;
          let data = JSON.stringify(users, null, 2);
          fs.writeFile("./moc/db.json", data, finished);
          function finished(err) {
            if (err) res.send(err);
          }
          res.json({
            token,
          });
        });
      } else {
        res.send("Pogresna lozinka");
      }
    } else {
      res.send("Pogresan email");
    }
  } else {
    res.sendStatus(403);
  }
});

function check(item) {
  if (item !== undefined && item !== null && item !== "") {
    return true;
  }
  return false;
}

app.post("/api/createUser", (req, res) => {
  var id = Math.random();
  let user = req.body;
  if (check(user.user) && check(user.password) && check(user.email)) {
    user.id = id.toString(36).substr(2, 9);
    user.role = "user";
    users.user.push(req.body);
    let data = JSON.stringify(users, null, 2);
    fs.writeFile("./moc/db.json", data, finished);
    function finished(err) {
      if (err) res.send(err);
      res.send(user);
    }
  }
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log("Server started on port 5000"));
