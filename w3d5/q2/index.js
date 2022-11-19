const express = require("express");
const server = express();
const path = require("path");
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "view"));
const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.render("index");
});

server.post("/result", (req, res) => {
  const nameVal = req.body.name;
  const ageVal = req.body.age;
  res.render("result", {
    name: nameVal,
    age: ageVal,
  });
});

server.listen(81, () => {
  console.log("Server running on port 81");
});
