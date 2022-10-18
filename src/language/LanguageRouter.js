const express = require('express')
const Language = require('./Language')
const LanguageService = require('./LanguageService')
const router = express.Router()

router.post('/languages', async (req, res) => {
  try {
    await LanguageService.insert(req.body)
    res.send({
      body: req.body,
      success: true
    })
  } catch (error) {
    res.send({
      error: error,
      success: false
    })
  }
})

router.get('/languages', async (req, res) => {
  try {
    const data = await LanguageService.getAll()
    res.send(data)
  } catch (error) {
    res.send({
      error: error,
      success: false
    })
  }
})

router.get('/languages/:id', async (req, res) => {
  try {
    const id = req.params.id
    const language = await LanguageService.getOne(id)
    res.send(language)
  } catch (error) {
    res.send({
      error: error,
      success: false
    })
  }
})

router.put('/languages/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Language.update(req.body, { where: { id: id } })
    const { dataValues } = await LanguageService.getOne(id)
    res.send({
      data: dataValues,
      success: true
    })
  } catch (error) {
    res.send({
      error: error,
      success: false
    })
  }
})

router.delete('/languages/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Language.destroy({ where: { id: id } })
    res.send({
      success: true
    })
  } catch (error) {
    res.send({
      error: error,
      success: false
    })
  }
})

module.exports = router
