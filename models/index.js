const User = require('./User')
const SuperAdmin = require('./SuperAdmin')
const Admin = require('./Admin')
const Chef = require('./Chef')
const Technicien = require('./Technicien')
const Client = require('./Client')
const Succursale = require('./Succursale')

const sequelize = require('../config/db');

//SuperAdmin Association
User.hasOne(SuperAdmin)
SuperAdmin.belongsTo(User)

//Admin Association
User.Admin = User.hasOne(Admin)
Admin.User = Admin.belongsTo(User)

//Chef Association
User.hasMany(Chef)
Chef.belongsTo(User)

//Technicien Association
User.hasMany(Technicien)
Technicien.belongsTo(User)

//Client Association
User.hasMany(Client)
Client.belongsTo(User)

//Succursale Association






module.exports = {User,SuperAdmin ,Admin ,Chef,Technicien ,Client,Succursale}