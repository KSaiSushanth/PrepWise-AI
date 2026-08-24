const TutorSession = require('../models/TutorSession')
const { generateMockLesson } = require('../services/mockAIService')

// @desc    Start a tutor session for a topic
// @route   POST /api/tutor/session
// @access  Private
const startSession = async (req, res) => {
  try {
    const { topic } = req.body

    if (!topic) {
      return res.status(400).json({ message: 'Topic is required' })
    }

    // Generate mock lesson content for the topic
    const lesson = generateMockLesson(topic)

    // Save session to MongoDB
    const session = await TutorSession.create({
      userId: req.user._id,
      topic,
      lesson
    })

    res.status(201).json({ success: true, session })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get all tutor sessions for the user
// @route   GET /api/tutor/sessions
// @access  Private
const getSessions = async (req, res) => {
  try {
    // Sort by newest first, only return topic + createdAt (not full lesson)
    const sessions = await TutorSession.find({ userId: req.user._id })
      .select('topic createdAt')       // ← Only return these fields
      .sort({ createdAt: -1 })         // ← Newest first (-1 = descending)

    res.json({ success: true, count: sessions.length, sessions })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get a single tutor session by ID (full lesson)
// @route   GET /api/tutor/session/:id
// @access  Private
const getSessionById = async (req, res) => {
  try {
    const session = await TutorSession.findById(req.params.id)

    if (!session) {
      return res.status(404).json({ message: 'Session not found' })
    }

    // Security: make sure this session belongs to the requesting user
    if (session.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to view this session' })
    }

    res.json({ success: true, session })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { startSession, getSessions, getSessionById }