const express = require('express')
const router = express.Router()
const { getRoadmap, updateTopicStatus } = require('../controllers/roadmapController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getRoadmap)
router.patch('/:topicId', protect, updateTopicStatus)

module.exports = router