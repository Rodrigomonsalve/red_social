let Sequelize = require ("sequelize");

const sequelize = new Sequelize ("usuarios", "root", null, {
    host:"localhost",
    dialect:"mysql",
    port:3307
})

module.exports=sequelize;