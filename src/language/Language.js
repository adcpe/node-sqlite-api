const { Model, DataTypes } = require('sequelize')
const db = require('../db')

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
    db,
    modelName: 'language'
  }
)

module.exports = Language
