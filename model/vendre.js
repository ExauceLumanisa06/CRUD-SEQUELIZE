const sequelize = require("../config/db")
const {DataTypes} =require("sequelize")

const Client = require("./client")
const Produit = require('./produit')

const Vendre = sequelize.define("Vendre",{
    ven_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    cli_id : DataTypes.INTEGER,
    pro_id: DataTypes.INTEGER

},{
    timestamps:false
})

//relation_association
Vendre.belongsTo(Client,{
    foreignKey:"cli_id"
})
Client.hasMany(Vendre,{
    foreignKey:"cli_id"
})

Vendre.belongsTo(Produit,{
    foreignKey:"pro_id"
})

Produit.hasMany(Vendre,{
    foreignKey:"pro_id"
})

module.exports = Vendre