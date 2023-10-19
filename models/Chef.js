const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Chef = sequelize.define("chefs", {  
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    grade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Chef;