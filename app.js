const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT
const connect_postgres = require('./models/postgresql/index')
const connect_mongodb = require('./models/mongo_db/mongo_Connection')


connect_mongodb();

app.use(cors(
    {
        origin: process.env.REACT_PORT,
        credentials: true,
        optionSuccessStatus: 200,
    }

))
app.use(express.json())
app.use('/admin', require('./routers/admin_Route'))
app.use('/contact', require('./routers/contact_Route'))
app.use('/complaints', require('./routers/complaints_Route'))
app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("helo world");
  })
app.use((err, req, res, next) => {
    // const error = {
    //     success: false,
    //     message: err.message || "somthing went wrong"
    // }
    console.log(err);
})


app.listen(port, () => console.log(`App is running on ${port}`))