module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define(
    "Items",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name"
      },
      price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: "price"
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
      tableName: "items"
    }
  );
  // Alert.associate = models => {

  // };
  return Items;
};
