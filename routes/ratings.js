const express = require("express")
const uploadRatings = require("../controllers/ratings")
const router = express.Router()

router.route('/').post(uploadRatings)
module.exports = router