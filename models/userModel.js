const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },
        email: {
            type: DataTypes.STRING,
            allowNull: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true
          },
          phoneNumber: {
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
          },
          country: {
            type: DataTypes.STRING,
            allowNull: true
          },
          loginPassword: {
            type: DataTypes.STRING,
            allowNull: true
          }
        });

        User.associate = (models) => {
          User.hasMany(models.Appliance, {foreignKey: 'userId'});
          User.hasMany(models.Goal, {foreignKey: 'userId'});
          User.hasMany(models.CostEstimation, {foreignKey: 'userId'})
       

        }

        return User
}