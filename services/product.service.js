const Sequelize = require("sequelize");
const db = require("../models/index");
// const CONSTANTS = require('../shared/constants');

const op = Sequelize.Op;

const { Items, Order, OrderMain } = db.sequelize.models;

const getAllItems = async () => {
  return Items.findAll({
    attributes: ["id", "name", "price"]
  });
};

const getAllOrders = async () => {
  return OrderMain.findAll({
    include: [
      {
        attributes: ["id", "order_id", "item_id", "quantity", "total"],
        as: "order",
        model: Order
      }
    ],
    attributes: ["id", "user_id", "is_active", "createdAt"]
  });
};

const getOrderById = async order_id => {
  return OrderMain.findAll({
    include: [
      {
        attributes: ["id", "order_id", "item_id", "quantity", "total"],
        as: "order",
        model: Order
      }
    ],
    attributes: ["id", "user_id", "is_active", "createdAt"],
    where: { id: order_id }
  });
};

const placeOrder1 = async () => {
  return await OrderMain.create({ user_id: 1, is_active: 1 });
};

const placeOrder2 = async reqBody => {
  return await Order.create(reqBody);
};

const getAllOrdersData = async order_id => {
  return OrderMain.findAll({
    include: [
      {
        attributes: ["id", "order_id", "item_id", "quantity", "total"],
        as: "order",
        model: Order
      }
    ],
    attributes: ["id", "user_id", "is_active", "createdAt"],
    where: { is_active: 1, is_cancelled: 0 }
  });
};

module.exports = {
  getAllItems,
  getAllOrders,
  placeOrder1,
  placeOrder2,
  getOrderById,
  getAllOrdersData
};
