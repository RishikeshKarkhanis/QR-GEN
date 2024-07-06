const express = require("express");
const dotenv = require("dotenv").config();

app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running On PORT : " + process.env.PORT);
});
