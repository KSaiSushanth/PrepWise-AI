const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/db')
require('dotenv').config()

// Route imports
const authRoutes = require('./src/routes/authRoutes')
const resumeRoutes = require('./src/routes/resumeRoutes')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/resume', resumeRoutes)

// Health Check
app.get('/', (req, res) => {
  res.json({ message: 'PrepWise AI API is running 🚀' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})