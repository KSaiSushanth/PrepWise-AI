const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  question:     { type: String, required: true },
  userAnswer:   { type: String, default: '' },
  aiEvaluation: { type: String, default: '' },
  score:        { type: Number, default: 0, min: 0, max: 100 }
})

const mockInterviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['Technical', 'HR', 'Resume'],
    required: true
  },
  targetCompany: {
    type: String,
    default: ''
  },
  targetRole: {
    type: String,
    default: ''
  },
  questions: [questionSchema],   // ← Array of Q&A subdocuments
  status: {
    type: String,
    enum: ['in-progress', 'completed'],
    default: 'in-progress'
  },
  overallScore: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('MockInterview', mockInterviewSchema)