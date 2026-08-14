const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  extractedText: {
    type: String,
    default: ''
  },
  analysis: {
    skills:       { type: [String], default: [] },
    projects:     { type: [String], default: [] },
    technologies: { type: [String], default: [] },
    strengths:    { type: [String], default: [] },
    weaknesses:   { type: [String], default: [] },
    summary:      { type: String, default: '' }
  },
  isAnalyzed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Resume', resumeSchema)