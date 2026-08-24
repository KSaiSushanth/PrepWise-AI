const mongoose = require('mongoose')

const tutorSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  topic: {
    type: String,
    required: true,
    trim: true
  },
  lesson: {
    definition:     { type: String, default: '' },
    fundamentals:   { type: String, default: '' },
    intermediate:   { type: String, default: '' },
    advanced:       { type: String, default: '' },
    examples:       { type: String, default: '' },
    bestPractices:  { type: String, default: '' },
    commonMistakes: { type: String, default: '' },
    interviewQs:    { type: [String], default: [] },
    quiz: [{
      question: String,
      options:  [String],
      answer:   String
    }],
    revisionNotes: { type: String, default: '' }
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('TutorSession', tutorSessionSchema)