const express = require('express')
const router = express.Router()
const { startInterview, submitAnswer, getInterviews } = require('../controllers/interviewController')
const { protect } = require('../middleware/authMiddleware')

router.post('/session',        protect, startInterview)   // POST /api/interview/session
router.post('/answer/:id',     protect, submitAnswer)     // POST /api/interview/answer/:id
router.get('/sessions',        protect, getInterviews)    // GET  /api/interview/sessions

module.exports = router