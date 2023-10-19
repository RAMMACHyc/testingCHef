const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')


const Succursale = sequelize.define("succursales", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  succursale_start: {
    type: DataTypes.DATE,
    allowNull: false
  },
  succursale_end:{
    type: DataTypes.DATE,
    allowNull: false
  }
})

module.exports = Succursale;