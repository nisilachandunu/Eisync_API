const { Sequelize,DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,


        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected....')
} )
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.appliances = require('./applianceModel.js')(sequelize,DataTypes)
db.goals = require('./goalModel.js')(sequelize,DataTypes)
db.users = require('./userModel.js')(sequelize,DataTypes)
db.costestimations = require('./costEstimationModel.js')(sequelize,DataTypes)
db.energyrates = require('./energyRateModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force: false})
.then(() => {
    console.log('yes re-sync is done!')
})

module.exports = db