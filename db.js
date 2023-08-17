const {Sequelize} = require('sequelize');

require('dotenv').config();


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