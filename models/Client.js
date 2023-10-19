const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')


const Client = sequelize.define("client", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

})

module.exports =  Client;