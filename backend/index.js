require('dotenv').config()
require('express-async-errors')
const colors = require('colors')
const cors = require('cors')
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const notFoundMiddleware = require('./middleware/not-found')

connectDB()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//Routes
app.get('/' , (req,res) => {
    res.send('Welcome To The Beginning')
})

app.use('/api/v1/user' , userRoutes)

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

app.listen(port , () => console.log(`Server Listening On Port ${port}`))