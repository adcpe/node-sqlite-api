const sequelize = require('./src/database')
const app = require('./src/app')

sequelize.sync()

app.listen(4000, () => {
  console.log('Server is up.')
})
