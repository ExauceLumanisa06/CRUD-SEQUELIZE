const { Op } = require("sequelize");
const User = require("../model/user");
const jwt = require("jsonwebtoken")


exports.signup = async (req, res) => {
    const { usr_name, usr_number, usr_pwd } = req.body
    try {
        //verifier si le compte existe deja
        const oldUser = await User.findOne({ where: { usr_number: usr_number } })
        if (oldUser) return res.status(309).json(`user avec ${usr_number} existe deja`)
        //sinon creer
        else {
            // const hashpwd = await bcrypte.hash(10,usr_pwd)
            const newUser = await User.create({ usr_name, usr_number, usr_pwd })
            return res.status(201).json({ message: "user created successfully", user: newUser })
        }

    } catch (error) {
        console.log(error.message);
    }
}
exports.login = (req, res) => {
    const { usr_number, usr_pwd } = req.body
    try {
        //verifier si le numero est dans  la bd
        User.findOne({ where: { usr_number: usr_number } })
        .then(function(user){
            if (!user) {
              return res.status(404).json({msg:"Passwword or Number incorrect"})  
            }
            //comparaer le mot de passe
            else{
                // bcrypte.compare(usr_pwd,user.usr_pwd).then().catch()
                if (user.usr_pwd != usr_pwd)    return res.status(404).json({msg:"Passwword or Number incorrect"}) 
                else {
                   const payload = {
                    usr_id:user.usr_id,
                    usr_name:user.usr_name,
                    usr_number:user.usr_number
                   }
                   const token = jwt.sign(payload,"secretkey",{expiresIn:"24h"})

                   return res.status(200).json({msg:"connected successfulluy",token,payload})
            }
            
            }
      
        })
        .catch()


  

        //generer le token 

    } catch (error) {
        console.log(error.message);
    }
}