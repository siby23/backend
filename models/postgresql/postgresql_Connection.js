// const { Sequelize, DataTypes } = require('sequelize')

// const sequelize = new Sequelize(
//     process.env.DB,
//     process.env.USERNAME,
//     process.env.PASSWORD,
//     {
//         dialect:process.env.DIALECT,
//         host:process.env.HOST
//     }
// )

// sequelize.authenticate().then(()=>{
//     console.log("connect");
// }).catch((error)=>console.log(error))

// const db={}

// db.Sequelize=Sequelize
// db.sequelize=sequelize

// db.sequelize.sync({force:false}).then(()=>{
//     console.log("re-sync done");
// })

const { Client } = require('pg')
const client = new Client({
  user: 'root_user',
  host: 'localhost',
  database: 'test',
  password: '12345',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected to postgresql");
});

module.exports=client