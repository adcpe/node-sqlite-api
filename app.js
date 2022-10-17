const express = require('express')

const UserRouter = require('./src/language/LanguageRouter')

const app = express()

app.use(express.json())

app.use(UserRouter)

module.exports = app
