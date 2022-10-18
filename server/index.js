const sequelize = require('./src/database')
const app = require('./src/app')
const Language = require('./src/language/Language')
const seeder = require('./src/seeder')

sequelize.sync({ force: true }).then(() => {
  seeder.forEach((seed) => {
    Language.create(seed)
  })
})

app.listen(4000, () => {
  console.log('Server is up.')
})
