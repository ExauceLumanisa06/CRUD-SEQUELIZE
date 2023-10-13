const sequelize = require("../config/db")
const {DataTypes} = require ("sequelize")

const Client = sequelize.define("Client",{
    cli_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    cli_nom : DataTypes.STRING,
    cli_tel: DataTypes.STRING

},{
    timestamps:false,
})

module.exports = Client
