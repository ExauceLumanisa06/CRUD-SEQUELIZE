//connection db
const {Sequelize} = require("sequelize")
require("dotenv").config()


const sequelize =   new Sequelize(process.env.db_name,process.env.db_user,process.env.db_pwd,{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate()
.then(function(){
    console.log("connection succeded");
})
.catch(function(error){
    console.log(error);
})

module.exports = sequelize