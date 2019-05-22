const db = require('../database/index')
const express = require('express')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", express.static(path.resolve(__dirname, '../static')))
app.use("/:id", express.static(path.resolve(__dirname, '../static')))

app.listen(PORT, ()=> console.log("Server is up and running on ", PORT))


