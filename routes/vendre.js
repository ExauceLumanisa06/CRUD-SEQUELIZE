const {Router} = require("express")
const router = Router()
const VendreControllers=require("../controllers/vendre")

router.post("/",VendreControllers.acheter)


module.exports=router