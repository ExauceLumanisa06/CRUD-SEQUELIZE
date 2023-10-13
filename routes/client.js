const {Router} = require("express")
const router = Router()
const clientControllers = require("../controllers/client")

router.post("/",clientControllers.createClient)
router.get("/",clientControllers.getAllClient)
router.get("/:cli_id",clientControllers.getOneClient)
router.put("/:cli_id",clientControllers.updateClient)
router.delete("/:cli_id",clientControllers.deleteClient)




module.exports = router