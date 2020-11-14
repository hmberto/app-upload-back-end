const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

const userDB = process.env.USER_DB
const passDB = process.env.PASS_DB
const clusterDB = process.env.CLUSTER_DB
const dbName = process.env.DB_NAME

const MONGOOSE_URL = "mongodb+srv://" + userDB + ":" + passDB + "@" + clusterDB + ".m1ekv.mongodb.net/" + dbName + "?retryWrites=true&w=majority"

mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(require('./routes'))

app.listen(3000)