const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
const applianceGoal = sequelize.define('applianceGoal', {
 
  })
  Goal.belongsToMany(Appliance, { through: applianceGoal });
  Appliance.belongsToMany(Goal, { through: applianceGoal });

 
  return applianceGoal
}