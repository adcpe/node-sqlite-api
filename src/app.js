const express = require('express')
const LanguageRouter = require('./language/LanguageRouter')

const app = express()

app.use(express.json())

app.use(LanguageRouter)

module.exports = app
