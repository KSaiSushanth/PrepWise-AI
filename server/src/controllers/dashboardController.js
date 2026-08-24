const User = require('../models/User')
const InterviewSetup = require('../models/InterviewSetup')
const Resume = require('../models/Resume')
const Roadmap = require('../models/Roadmap')
const TutorSession = require('../models/TutorSession')
const MockInterview = require('../models/MockInterview')

// @desc    Get dashboard data (aggregated from all collections)
// @route   GET /api/dashboard
// @access  Private
const getDashboard = async (req, res) => {
  try {
    const userId = req.user._id

    // Fire all DB queries simultaneously using Promise.all
    const [setup, resume, roadmap, recentSessions, recentInterviews] = await Promise.all([
      InterviewSetup.findOne({ userId }),
      Resume.findOne({ userId }).select('fileUrl isAnalyzed createdAt'),
      Roadmap.findOne({ userId }),
      TutorSession.find({ userId }).select('topic createdAt').sort({ createdAt: -1 }).limit(5),
      MockInterview.find({ userId }).select('type status overallScore createdAt').sort({ createdAt: -1 }).limit(5)
    ])

    // Calculate roadmap progress
    let roadmapProgress = null
    if (roadmap) {
      const total     = roadmap.topics.length
      const completed = roadmap.topics.filter(t => t.status === 'completed').length
      const inProgress = roadmap.topics.filter(t => t.status === 'in-progress').length

      roadmapProgress = {
        total,
        completed,
        inProgress,
        pending: total - completed - inProgress,
        percentage: Math.round((completed / total) * 100)
      }
    }

    res.json({
      success: true,
      user: {
        name:  req.user.name,
        email: req.user.email
      },
      setup,
      resume,
      roadmapProgress,
      recentActivity: {
        tutorSessions:   recentSessions,
        mockInterviews:  recentInterviews
      }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getDashboard }