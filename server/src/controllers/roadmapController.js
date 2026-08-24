const Roadmap = require('../models/Roadmap')

// @desc    Get user's roadmap
// @route   GET /api/roadmap
// @access  Private
const getRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({ userId: req.user._id })

    if (!roadmap) {
      return res.status(404).json({ message: 'No roadmap found. Complete your setup first.' })
    }

    res.json({ success: true, roadmap })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Update a topic's status
// @route   PATCH /api/roadmap/:topicId
// @access  Private
const updateTopicStatus = async (req, res) => {
  try {
    const { topicId } = req.params
    const { status } = req.body

    const validStatuses = ['pending', 'in-progress', 'completed']
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status. Use: pending, in-progress, completed' })
    }

    const roadmap = await Roadmap.findOne({ userId: req.user._id })
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' })
    }

    // Find subdocument by _id
    const topic = roadmap.topics.id(topicId)
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' })
    }

    topic.status = status
    await roadmap.save()

    res.json({ success: true, message: `Topic marked as ${status}`, topic })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getRoadmap, updateTopicStatus }