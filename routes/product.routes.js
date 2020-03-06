const express = require("express");

const productRouter = express.Router();

const productController = require("../controller/product.controller");
// const errorHandler = require("../shared/error-handler");

module.exports.productRoutes = () => {
  productRouter.get("/items", productController.getAllItems);

  productRouter.get("/orders", productController.getAllOrders);

  productRouter.get("/orders/:order_id", productController.getOrderById);

  productRouter.post("/order", productController.placeOrder);

  productRouter.get("/orders-data", productController.getAllOrdersData);

  return productRouter;
};
