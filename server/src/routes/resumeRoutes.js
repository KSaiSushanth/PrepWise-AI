const express = require('express')
const router = express.Router()
const { uploadResume, getAnalysis } = require('../controllers/resumeController')
const { protect } = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')

// Multer error handler — returns JSON instead of HTML
const handleUpload = (req, res, next) => {
  upload.single('resume')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message })
    }
    next()
  })
}

// POST /api/resume/upload — upload PDF (protected + multer middleware)
router.post('/upload', protect, handleUpload, uploadResume)

// GET /api/resume/analysis — get analysis (protected)
router.get('/analysis', protect, getAnalysis)

module.exports = router