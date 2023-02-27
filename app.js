const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const connect_postgres=require('./models/postgresql/postgresql_Connection')
const connect_mongodb=require('./models/mongo_db/mongo_Connection')

connect_mongodb();

app.use(express.json())
app.use(cors())
app.use('/admin',require('./routers/admin_Route'))
app.use('/contact',require('./routers/contact_Route'))
app.use('/complaints',require('./routers/complaints_Route'))

app.use((err, req, res, next) => {
    const error = {
        success: false,
        message: err.message || "somthing went wrong"
    }
    console.log(error);
})


app.listen(port, () => console.log(`App is running on ${port}`))