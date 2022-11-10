require('dotenv').config()
require('express-async-errors')
const colors = require('colors')
const cors = require('cors')
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const commentRoutes = require('./routes/commentRoutes')
const notFoundMiddleware = require('./middleware/not-found')
const authMiddleware = require('./middleware/authMiddleware')

connectDB()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//Routes
app.get('/' , (req,res) => {
    res.send('Welcome To The Beginning')
})

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/post',authMiddleware,postRoutes)
app.use('/api/v1/post',authMiddleware,commentRoutes)

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

app.listen(port , () => console.log(`Server Listening On Port ${port}`))