const express = require('express')
const router = express.Router()
const { startSession, getSessions, getSessionById } = require('../controllers/tutorController')
const { protect } = require('../middleware/authMiddleware')

router.post('/session',       protect, startSession)     // POST /api/tutor/session
router.get('/sessions',       protect, getSessions)      // GET  /api/tutor/sessions
router.get('/session/:id',    protect, getSessionById)   // GET  /api/tutor/session/:id

module.exports = router