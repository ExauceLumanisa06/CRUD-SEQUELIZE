const sequelize = require("../config/db")
const {DataTypes} = require("sequelize")


const Produit = sequelize.define("Produit",{
    prod_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    pro_libelle:DataTypes.STRING,
    pro_prix:DataTypes.INTEGER

},
{
    timestamps:false
}
)
module.exports=Produit