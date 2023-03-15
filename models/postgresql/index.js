const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  }
)

sequelize.authenticate().then(() => {
  console.log("connect to postgresql");
}).catch((error) => console.log(error))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.contact = require('../postgresql/contact_Schema')(sequelize, DataTypes)


db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
})


module.exports = db
