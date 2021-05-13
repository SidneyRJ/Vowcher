const Sequelize = require('sequelize');

const connection = new Sequelize('nomedoarquivo', 'root','senhadoservidor',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

//module.exports = connection;