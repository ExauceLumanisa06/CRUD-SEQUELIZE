const {Router} = require("express")
const router = Router()
const ProduitControllers = require("../controllers/produit")
const auth = require("../middleware/auth")

router.post("/",auth,ProduitControllers.createProduit)
router.get("/",ProduitControllers.getAllProduit)
router.get("/:prod_id", ProduitControllers.getOneProduit )
router.put("/:prod_id",ProduitControllers.updateProduit)
router.delete("/:prod_id",ProduitControllers.deleteProduit)



module.exports = router