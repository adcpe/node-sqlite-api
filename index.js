const sequelize = require('./src/database')
const app = require('./src/app')

sequelize.sync()

app.listen(3000, () => {
  console.log('Server is up.')
})
