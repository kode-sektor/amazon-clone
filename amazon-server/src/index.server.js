const express = require('express')
const app = express()
const env = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

// routes


// environment variables / constants
env.config()

// mongodb connection
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex : true, 
    useFindAndModify: false 
}).then(() => {
    console.log('Database Connected')
})

app.use(cors())
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'uploads')))


const PORT = process.env.PORT || 2000;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})