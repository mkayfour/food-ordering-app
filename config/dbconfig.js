module.exports = {
  userName: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: "mariadb",
  define: {
    underscored: true
  },
  pool: {
    max: 5,
    idle: process.env.DB_POOL_IDLE,
    acquire: process.env.DB_POOL_ACQUIRE
  }
};
