const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);

const dbconfig = require("../config/dbconfig");
// const logger = require("../shared/logger.js");

const db = {};

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.userName,
  dbconfig.password,
  dbconfig
);

// below generates all models references inside directory automatically
// it is equivalent to manual entry as below
// db.customers = require('./customer.model.js')(sequelize, Sequelize);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
    // logger.debug(`model.name: ${model.name}`);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
