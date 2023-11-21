const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const applianceGoal = sequelize.define("applianceGoal", {
    onHours: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    onTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    offTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  Goal.belongsToMany(Appliance, { through: applianceGoal });
  Appliance.belongsToMany(Goal, { through: applianceGoal });

  return applianceGoal;
};