const { Sequelize } = require('sequelize')

const db = new Sequelize('sqlite:./dev.sqlite')

module.exports = db
