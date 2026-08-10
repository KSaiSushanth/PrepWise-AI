const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/db')
require('dotenv').config()

// Initialize Express
const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'PrepWise AI API is running 🚀' })
})

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})
