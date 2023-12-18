const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const User = sequelize.define("User",{
    usr_id:{
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    usr_name:DataTypes.STRING,
    usr_number:DataTypes.INTEGER,
    usr_pwd:DataTypes.STRING
    
},
{
    timestamps:false
})

module.exports = User