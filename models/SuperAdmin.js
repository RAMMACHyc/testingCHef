const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SuperAdmin = sequelize.define("superAdmin",{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
})

module.exports = SuperAdmin;