const express = require("express")
const { signup, login, verifyAccount } = require("../controllers/auth")
const router = express.Router()
// POST
// http://localhost:3000/api/v1/auth/signup
router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/verify/:token").post(verifyAccount)

module.exports = router