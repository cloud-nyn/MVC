const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "view"));
app.use("/css", express.static(path.join(__dirname, "view/stylesheet"))); // use the express.static method for accessing files like css

app.get("/", (req, res) => {
  const date = new Date();
  const css = date.getHours() > 6 && date.getHours() < 18 ? "day" : "night"; //16
  res.render("index", {
    time: date.toTimeString(),
    style: css,
  });
});

app.listen(90, () => {
  console.log("Server is running on port 90");
});
