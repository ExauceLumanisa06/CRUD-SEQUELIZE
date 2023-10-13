const Vendre  = require ("../model/vendre")

exports.acheter = (req, res)=>{
    const {cli_id, pro_id}=req.body
    try {
        Vendre.create({
            cli_id, 
            pro_id
        })
        .then((vendre)=>{
            return res.status(201).json(vendre)
        })
        .catch()
        
    } catch (error) {
        res.json(error)
    }
}