const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const App = express();

App.use("/", (req, res) => {
  res.send("Hey there");
});

App.listen(process.env.PORT, () => {
  console.log("Node App started on ", process.env.PORT);
});
