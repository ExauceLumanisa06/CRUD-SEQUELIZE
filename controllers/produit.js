const Client = require("../model/client")
const Produit = require("../model/produit")
const Vendre = require("../model/vendre")

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
        Client.findByPk(req.params.prod_id,{include:[
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
    const { pro_libelle, pro_prix } = req.body
    try {
        Produit.update({ pro_libelle: pro_libelle, pro_prix: pro_prix }, { where: { prod_id: req.params.prod_id } })
            .then((msg) => {
                if (msg[0] < 1) return res.send('modification non effectuée')
                else return res.send("modification reussie !")
            })
            .catch()

    } catch (error) {
        res.json(error)
    }
}
exports.deleteProduit = (req, res) => {
    try {
        Produit.destroy({ where: { prod_id: req.params.prod_id } })
            .then((msg) => {
                if (msg < 1) return res.send('suppression non effectuée')
                else return res.send("suppression reussie !")
            })
            .catch()

    } catch (error) {
        res.json(error)
    }

}