require('.')

const sequelize = require('../config/db');










//run
sequelize.sync({force: true}).then(() => {
    console.log('Tables created successfully!');
    
}).catch((error) => {
    console.error('Unable to create tables : ', error);
});