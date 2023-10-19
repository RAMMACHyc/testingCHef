const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Admin = sequelize.define("admins", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    
})

module.exports = Admin;