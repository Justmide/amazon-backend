// import express from 'express';
// create an express app
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const ratingsRoutes = require("./routes/ratings")
const AuthRoutes = require("./routes/auth")
const UserRoutes = require("./routes/user")
const ProductRoutes = require("./routes/product")
app.use("/api/v1/uploadRatings", ratingsRoutes)
app.use("/api/v1/auth", AuthRoutes)
app.use("/api/v1/users", UserRoutes)
app.use("/api/v1/products", ProductRoutes)
app.use(express.json())

module.exports = app