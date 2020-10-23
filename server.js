require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000

// connect to our MongoDb database
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.DATABASE_URL, connectionOptions)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// accept requests in JSON format
app.use(express.json())

// use a route handler to handle all routes pertaining to /subscribers
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(PORT, () => console.log('Server Started'))
