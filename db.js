const path = require('path')
const {Sequelize, DataTypes} =  require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite'
});

module.exports = {
    db, 
    Sequelize
}