require('dotenv').config()
module.exports = {
  development: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    migrationStorageTableName: "migrations",
  },
  test: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    migrationStorageTableName: "migrations",
  },
  production: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    migrationStorageTableName: "migrations",
  }
}