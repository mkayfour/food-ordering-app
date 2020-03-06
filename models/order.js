module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
      },
      order_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: "order_id"
      },
      item_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: "item_id"
      },
      quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: "quantity"
      },
      total: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: "total"
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at"
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at"
      }
    },
    {
      tableName: "order"
    }
  );
  //   Order.associate = models => {

  //   };
  return Order;
};
