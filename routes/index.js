const express = require("express");
// const userRoutes = require("./user.routes");
const product = require("./product.routes");

const apiRouter = express.Router();

// apiRouter.get("/healthcheck", (req, res) => {
//   const greeting = "healthcheck.ok";
//   const infoResponse = new InfoResponse(res.translate(greeting));
//   res.json(infoResponse);
// });

// apiRouter.use("/user", userRoutes);
apiRouter.use("/product", product.productRoutes());

module.exports = apiRouter;
