const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  host: './dev.sqlite'
})

module.exports = sequelize
