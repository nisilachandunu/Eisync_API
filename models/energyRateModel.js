const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const EnergyRate = sequelize.define('energyRates', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },
        fixedCharge: {
          type: DataTypes.DOUBLE,
          allowNull: true
        },
        fromUnit: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        toUnit: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        charge: {
          type: DataTypes.DOUBLE,
          allowNull: true
        },
        order: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      });
      return EnergyRate;
      
}