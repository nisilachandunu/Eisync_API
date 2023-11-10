const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
const CostEstimation = sequelize.define('costEstimation', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
    fromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    currencyType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estimatedCost: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  })
  return CostEstimation
}