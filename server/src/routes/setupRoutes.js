const express = require('express')
const router = express.Router()
const { saveSetup, getSetup } = require('../controllers/setupController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', protect, saveSetup)
router.get('/', protect, getSetup)

module.exports = router