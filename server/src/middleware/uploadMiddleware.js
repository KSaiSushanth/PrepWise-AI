const multer = require('multer')

// Store file in memory (as Buffer) — we'll upload directly to Cloudinary
const storage = multer.memoryStorage()

// File filter — accept PDF files (including when Postman sends as octet-stream)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'application/octet-stream']
  if (allowedTypes.includes(file.mimetype) || file.originalname.endsWith('.pdf')) {
    cb(null, true)
  } else {
    cb(new Error('Only PDF files are allowed'), false)
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }  // 5MB max
})

module.exports = upload