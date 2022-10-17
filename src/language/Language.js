const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Language extends Model {}

Language.init(
  {
    name: {
      type: DataTypes.STRING
    },
    creator: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    website: {
      type: DataTypes.STRING
    },
    logo: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'language'
  }
)

module.exports = Language
