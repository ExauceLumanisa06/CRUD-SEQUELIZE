const {Router} = require("express")
const { signup, login } = require("../controllers/user")

const router = Router()

router.post("/signup",signup)
router.post("/login",login)

module.exports = router