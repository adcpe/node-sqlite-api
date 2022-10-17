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
    const language = await LanguageService.getOne(req.params.id)
    res.send(language)
  } catch (error) {
    res.send({
      error: error,
      success: false
    })
  }
})

router.put('/languages/:id', async (req, res) => {
  const id = req.params.id
  const language = await Language.findOne({ where: { id: id } })
  language = req.body
  await language.save()
  res.send({
    success: true
  })
})

router.delete('/user/:id', async (req, res) => {
  const id = req.params.id
  await User.destroy({ where: { id: id } })
  res.send({
    success: true
  })
})

module.exports = router
