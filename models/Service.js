const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Service = sequelize.define("services", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nom:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
})

module.exports = Service;