const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const Goal = sequelize.define('goal', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },
        goalName: {
          type: DataTypes.STRING,
          allowNull: true
        },
        startDate: {
          type: DataTypes.DATE,
          allowNull: true
        },
        endDate: {
          type: DataTypes.DATE,
          allowNull: true
        },
        goalAmount: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        status: {
          type: DataTypes.STRING,
          allowNull: true
        }
      });

      return Goal
}
