const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')


const Technicien = sequelize.define("techniciens",{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  disponibility:{
    type:DataTypes.BOOLEAN,
    allowNull: false
  },
  speciality:{
    type:DataTypes.STRING,
    allowNull: false
  },

 
})

module.exports = Technicien;