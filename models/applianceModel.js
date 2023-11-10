const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const Appliance = sequelize.define("appliance" , {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },
        deviceType: {
            type: DataTypes.STRING,
            allowNull: true
          },
          power: {
            type: DataTypes.FLOAT,
            allowNull: true

          },
          voltage: {
            type: DataTypes.FLOAT,
            allowNull: true
          },
          onHours: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          deviceModel: {
            type: DataTypes.STRING,
            allowNull: true
          },
          deviceBrand: {
            type: DataTypes.STRING,
            allowNull: true
          },
          isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: true
          },
          createdOn: {
            type: DataTypes.DATE,
            allowNull: true
          }
        });
    return Appliance
}