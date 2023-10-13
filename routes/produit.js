const {Router} = require("express")
const router = Router()
const ProduitControllers = require("../controllers/produit")

router.post("/",ProduitControllers.createProduit)



module.exports = router