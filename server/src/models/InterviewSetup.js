const mongoose = require('mongoose')

const interviewSetupSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  targetCompany: {
    type: String,
    required: true,
    trim: true
  },
  targetRole: {
    type: String,
    required: true,
    trim: true
  },
  experienceLevel: {
    type: String,
    enum: ['Fresher', '1-2 years', '3-5 years', '5+ years'],
    default: 'Fresher'
  },
  strongTopics: {
    type: [String],
    default: []
  },
  weakTopics: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('InterviewSetup', interviewSetupSchema)