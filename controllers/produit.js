const Produit = require("../model/produit")

exports.createProduit = (req, res) => {
    //reception body
    const { pro_libelle, pro_prix } = req.body
    try {
        //verify if client exist
        Produit.findOne({ where: { pro_libelle } })
            .then(function (oldProduit) {
                if (oldProduit) return res.status(309).json("Le produit existe déjà")
                else Produit.create({
                    pro_libelle,
                    pro_prix
                })
                    .then((produit) => {
                        return res.status(201).json({ msg: "Le produit est crée", produit })

                    })
                    .catch((err) => res.json(err.message))
            })


    }
    catch (error) {
        res.json(error)
    }
}

exports.getAllProduit = (req, res) => {

    try {
        Produit.findAll()
            .then((produits) => {
                if (produits.length < 1) return res.status(404).send('Pas de produit in db')
                else return res.status(200).json(produits)
            })
            .catch()
    } catch (error) {
        res.json(error)

    }
}
exports.getOneProduit = (req, res) => {

    try {
        Produit.findByPk(req.params.pro_id,{include:[
            {
                model:Vendre,
                include:[
                   { model:Client}
                ]
            }
        ]})
        .then((produit) => {
            if (!produit) return res.status(404).send("produit non trouvé")
            else return res.status(200).json({ produit })
        })
        .catch()
        
    } catch (error) {
        res.json(error)
        
    }
}
exports.updateProduit = (req, res) => {

}
exports.deleteProduit = (req, res) => {

}