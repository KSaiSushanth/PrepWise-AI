const InterviewSetup = require('../models/InterviewSetup')
const Roadmap = require('../models/Roadmap')
const { generateMockRoadmap } = require('../services/mockAIService')

// @desc    Save interview setup + generate roadmap
// @route   POST /api/setup
// @access  Private
const saveSetup = async (req, res) => {
  try {
    const { targetCompany, targetRole, experienceLevel, strongTopics, weakTopics } = req.body

    if (!targetCompany || !targetRole) {
      return res.status(400).json({ message: 'Company and role are required' })
    }

    // Upsert setup
    const setup = await InterviewSetup.findOneAndUpdate(
      { userId: req.user._id },
      { targetCompany, targetRole, experienceLevel, strongTopics, weakTopics },
      { upsert: true, new: true }
    )

    // Generate mock roadmap
    const topics = generateMockRoadmap(setup)

    // Upsert roadmap
    const roadmap = await Roadmap.findOneAndUpdate(
      { userId: req.user._id },
      { userId: req.user._id, setupId: setup._id, topics },
      { upsert: true, new: true }
    )

    res.status(201).json({ success: true, setup, roadmap })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get current setup
// @route   GET /api/setup
// @access  Private
const getSetup = async (req, res) => {
  try {
    const setup = await InterviewSetup.findOne({ userId: req.user._id })

    if (!setup) {
      return res.status(404).json({ message: 'No setup found. Please complete your interview setup.' })
    }

    res.json({ success: true, setup })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { saveSetup, getSetup }