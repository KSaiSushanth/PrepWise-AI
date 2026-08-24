const MockInterview = require('../models/MockInterview')
const InterviewSetup = require('../models/InterviewSetup')
const { generateMockInterviewQuestion } = require('../services/mockAIService')

// @desc    Start a new mock interview session
// @route   POST /api/interview/session
// @access  Private
const startInterview = async (req, res) => {
  try {
    const { type } = req.body

    const validTypes = ['Technical', 'HR', 'Resume']
    if (!type || !validTypes.includes(type)) {
      return res.status(400).json({ message: 'Type must be: Technical, HR, or Resume' })
    }

    // Get user's setup to know their target company + role
    const setup = await InterviewSetup.findOne({ userId: req.user._id })
    const targetCompany = setup?.targetCompany || 'a top tech company'
    const targetRole    = setup?.targetRole    || 'Software Engineer'

    // Get first question from mock AI
    const firstQuestion = generateMockInterviewQuestion(type, targetRole, targetCompany)

    // Create interview session with first question
    const interview = await MockInterview.create({
      userId: req.user._id,
      type,
      targetCompany,
      targetRole,
      questions: [{ question: firstQuestion }]
    })

    res.status(201).json({ success: true, interview })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Submit answer + get next question
// @route   POST /api/interview/answer/:id
// @access  Private
const submitAnswer = async (req, res) => {
  try {
    const { answer, finished } = req.body

    const interview = await MockInterview.findById(req.params.id)
    if (!interview) {
      return res.status(404).json({ message: 'Interview session not found' })
    }

    // Authorization check
    if (interview.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' })
    }

    // Save the answer to the last question
    const lastQuestion = interview.questions[interview.questions.length - 1]
    lastQuestion.userAnswer   = answer
    lastQuestion.aiEvaluation = `Good attempt! Your answer covers the basics of ${lastQuestion.question.split(' ').slice(0, 4).join(' ')}. Focus more on practical examples and edge cases.`
    lastQuestion.score        = Math.floor(Math.random() * 30) + 60   // Mock: 60-90 score

    if (finished) {
      // Calculate overall score and mark as completed
      const totalScore = interview.questions.reduce((sum, q) => sum + q.score, 0)
      interview.overallScore = Math.round(totalScore / interview.questions.length)
      interview.status = 'completed'
    } else {
      // Add next question
      const nextQuestion = generateMockInterviewQuestion(
        interview.type,
        interview.targetRole,
        interview.targetCompany
      )
      interview.questions.push({ question: nextQuestion })
    }

    await interview.save()

    res.json({ success: true, interview })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get all interview sessions
// @route   GET /api/interview/sessions
// @access  Private
const getInterviews = async (req, res) => {
  try {
    const interviews = await MockInterview.find({ userId: req.user._id })
      .select('type targetCompany targetRole status overallScore createdAt')
      .sort({ createdAt: -1 })

    res.json({ success: true, count: interviews.length, interviews })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { startInterview, submitAnswer, getInterviews }