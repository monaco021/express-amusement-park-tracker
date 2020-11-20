const {
    username,
    password,
    host,
    database,
} = require('./index').db;

module.exports = {
  development: {
    username,
    password,
    host,
    database,
    dialect: "postgres",
  }
};
