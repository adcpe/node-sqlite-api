const Language = require('./Language')

const insert = async (body) => {
  await Language.create(body)
}

const getAll = async () => {
  return await Language.findAll()
}

const getOne = async (id) => {
  const user = await Language.findOne({ where: { id: id } })

  return user
}

module.exports = {
  insert,
  getAll,
  getOne
}
