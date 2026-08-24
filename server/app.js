const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/db')
require('dotenv').config()

// Route imports
const authRoutes      = require('./src/routes/authRoutes')
const resumeRoutes    = require('./src/routes/resumeRoutes')
const setupRoutes     = require('./src/routes/setupRoutes')
const roadmapRoutes   = require('./src/routes/roadmapRoutes')
const tutorRoutes     = require('./src/routes/tutorRoutes')
const interviewRoutes = require('./src/routes/interviewRoutes')
const dashboardRoutes = require('./src/routes/dashboardRoutes')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth',      authRoutes)
app.use('/api/resume',    resumeRoutes)
app.use('/api/setup',     setupRoutes)
app.use('/api/roadmap',   roadmapRoutes)
app.use('/api/tutor',     tutorRoutes)
app.use('/api/interview', interviewRoutes)
app.use('/api/dashboard', dashboardRoutes)

// Health Check
app.get('/', (req, res) => {
  res.json({ message: 'PrepWise AI API is running 🚀' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`)
})