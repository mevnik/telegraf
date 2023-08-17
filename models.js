const {DataTypes} require('sequelize');
const {sequelize} require('./db.js');



export const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	chatId: {type: DataTypes.STRING, unique: true,},
	right: {type: DataTypes.INTEGER,defaultValue: 0},
	not_right: {type: DataTypes.INTEGER, defaultValue: 0}
});