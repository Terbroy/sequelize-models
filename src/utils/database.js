const {Sequelize} = require("sequelize");
require("dotenv").config();

console.log(process.env.DB_PASS)
const db = new Sequelize({
    database: process.env.DB_NAME || 'todo',
    username: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432 ,
    password: process.env.DB_PASS || 'root',
    dialect: "postgres"
});

module.exports =db;