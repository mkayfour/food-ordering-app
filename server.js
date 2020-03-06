const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");

const App = express();

App.use(bodyParser());

const data = [
  {
    id: 1,
    name: "Vada Pav",
    price: 10
  },
  {
    id: 2,
    name: "Samosa",
    price: 12
  },
  {
    id: 3,
    name: "Vada Pav",
    price: 10
  },
  {
    id: 4,
    name: "Vada Pav",
    price: 10
  },
  {
    id: 5,
    name: "Vada Pav",
    price: 10
  },
  {
    id: 6,
    name: "Vada Pav",
    price: 40
  }
];

App.get("/items", (req, res) => {
  res.status(200).json(data);
});

App.use("/api", apiRoutes);

App.post("/items", (req, res) => {
  console.log("data: ", req.body);
  res.status(200).json({ msg: "Order successfully placed." });
});

App.listen(3030, () => {
  console.log("Node App started on 3030");
});

App.use(bodyParser.json());
App.use(
  bodyParser.urlencoded({
    extended: true
  })
);
