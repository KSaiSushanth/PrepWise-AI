const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  order: {
    type: Number,
    required: true
  }
})

const roadmapSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  setupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'InterviewSetup'
  },
  topics: [topicSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Roadmap', roadmapSchema)