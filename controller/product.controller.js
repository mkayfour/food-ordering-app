const productService = require("../services/product.service");

const getAllItems = async (req, res) => {
  const result = await productService.getAllItems();
  return res.status(200).json(result);
};

const getOrderById = async (req, res) => {
  const result = await productService.getOrderById(req.params.order_id);
  return res.status(200).json(result);
};

const getAllOrders = async (req, res) => {
  const result = await productService.getAllOrders();
  return res.status(200).json(result);
};

const placeOrder = async (req, res) => {
  let result = await productService.placeOrder1();
  result = result.toJSON();

  const reqBody = req.body;

  const data = await reqBody.map(async order => {
    order.order_id = result.id;
    await productService.placeOrder2(order);
  });

  return res.status(200).json(data);
};

const getAllOrdersData = async (req, res) => {
  const result = await productService.getAllOrdersData();
  //
  console.log();
  return res.status(200).json(result);
};

module.exports = {
  getAllItems,
  getAllOrders,
  placeOrder,
  getOrderById,
  getAllOrdersData
};
