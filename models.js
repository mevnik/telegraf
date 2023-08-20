const {DataTypes} = require('sequelize');
const {sequelize} = require('./db.js');



exports.Chat = sequelize.define('chat', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	chatId: {type: DataTypes.STRING, unique: true,},
	right: {type: DataTypes.INTEGER,defaultValue: 0},
	wrong: {type: DataTypes.INTEGER, defaultValue: 0}
});