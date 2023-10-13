const Produit = require("../model/produit")

exports.createProduit = (req, res) => {
    //reception body
    const { pro_libelle, pro_prix } = req.body
    try {
        //verify if client exist
        Produit.findOne({ where: { pro_libelle} })
            .then(function (oldProduit) {
                if (oldProduit) return res.status(309).json("Le produit existe déjà")
                else Produit.create({
                    pro_libelle,
                    pro_prix
                })
                .then((produit) => {
                    return res.status(201).json({ msg: "Le produit est crée", produit})
    
                })
                .catch((err)=>res.json(err.message))
            })
     

    }
     catch (error) {
        res.json(error)
    }
}