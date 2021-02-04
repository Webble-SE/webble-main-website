const {  Model, DataTypes  } = require('sequelize')
const sequelize = require('../db')

class Example extends Model {}

Example.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Example',
    tableName: 'Example',
    timestamps: false
  }
)

// Example.belongsTo(OtherExampleModel, { foreignKey: 'other_id' }) // To add if you want to connect/sync them with other models in DB

module.exports = Example
