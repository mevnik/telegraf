/* 
const {Sequelize} = require('sequelize');

require('dotenv').config();

// for sequelize
exports.sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    {
        dialect: 'mysql',
        host: process.env.DB_HOST, //или postgres или mariadb
        port: process.env.DB_PORT // для mysql не нужно (кстати, у него получается порт 3306. тоже для mariadb )
    }

    )

// for mysql2
const mysql = require('mysql2');
require('dotenv').config();

exports.connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

*/
//for mysql

const mysql = require('mysql');
require('dotenv').config();

exports.connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});