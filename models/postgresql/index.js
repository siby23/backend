const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
  "test",
  "root_user",
  "12345",
  {
    host: "localhost",
    dialect: 'postgres'
  }
)

sequelize.authenticate().then(() => {
  console.log("connect");
}).catch((error) => console.log(error))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.contact = require('../postgresql/contact_Schema')(sequelize, DataTypes)


db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done");
})


module.exports = db

// const { Client } = require('pg')
// const client = new Client({
//   user: 'root_user',
//   host: 'localhost',
//   database: 'test',
//   password: '12345',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected to postgresql");
// });