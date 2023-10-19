
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env]
const sequelize = new Sequelize(config.database, config.username, config.password, config)

sequelize.authenticate()
    .then(()=>{
        console.log('connection successful')
    })
    .catch((error)=>{
        console.error('fail', error)
    })

module.exports = sequelize



