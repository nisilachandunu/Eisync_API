const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
const CostEstimationAppliance = sequelize.define('costEstimationAppliance', {
 
  })
  CostEstimation.belongsToMany(Appliance, { through: CostEstimationAppliance });
  Appliance.belongsToMany(CostEstimation, { through: CostEstimationAppliance });

 
  return CostEstimationAppliance
}