module.exports = (sequelize, DataTypes) => {
  const OrderMain = sequelize.define(
    "OrderMain",
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        field: "user_id"
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        field: "is_active",
        default: 1
      },
      is_cancelled: {
        type: DataTypes.BOOLEAN,
        field: "is_cancelled",
        default: 0
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
      tableName: "order_main"
    }
  );
  OrderMain.associate = models => {
    OrderMain.hasMany(models.Order, { foreignKey: "order_id", as: "order" });
    // Timezone.hasMany(models.Company, {
    //   foreignKey: "timezone_id",
    //   as: "company"
    // });
  };
  return OrderMain;
};
