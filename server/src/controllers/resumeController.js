const Resume = require('../models/Resume')
const { uploadToCloudinary } = require('../services/cloudinaryService')
// pdf-parse will be added in Phase 6 with Gemini AI integration

// @desc    Upload resume PDF
// @route   POST /api/resume/upload
// @access  Private
const uploadResume = async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a PDF file' })
    }

    // Upload PDF to Cloudinary
    const cloudinaryResult = await uploadToCloudinary(req.file.buffer)
    const fileUrl = cloudinaryResult.secure_url

    // Check if user already has a resume — update it, else create new
    let resume = await Resume.findOne({ userId: req.user._id })

    if (resume) {
      // Update existing resume
      resume.fileUrl = fileUrl
      resume.extractedText = ''  // will be filled in Phase 6
      resume.analysis = { skills: [], projects: [], technologies: [], strengths: [], weaknesses: [], summary: '' }
      resume.isAnalyzed = false
      await resume.save()
    } else {
      // Create new resume
      resume = await Resume.create({
        userId: req.user._id,
        fileUrl,
        extractedText: ''  // will be filled in Phase 6
      })
    }

    res.status(201).json({
      success: true,
      message: 'Resume uploaded successfully',
      resumeUrl: fileUrl
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get resume analysis (mock for now — real AI in Phase 6)
// @route   GET /api/resume/analysis
// @access  Private
const getAnalysis = async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.user._id })

    if (!resume) {
      return res.status(404).json({ message: 'No resume found. Please upload your resume first.' })
    }

    // Mock analysis for now — will be replaced with Gemini API in Phase 6
    const mockAnalysis = {
      skills: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      projects: ['FindMySpace', 'PrepWise AI'],
      technologies: ['JWT', 'bcrypt', 'REST APIs', 'Git', 'Tailwind CSS'],
      strengths: ['Strong full-stack development skills', 'Good project portfolio'],
      weaknesses: ['No system design experience', 'Limited DSA practice'],
      summary: 'A promising full-stack developer with solid MERN stack experience and two notable projects.'
    }

    // Update resume with mock analysis
    resume.analysis = mockAnalysis
    resume.isAnalyzed = true
    await resume.save()

    res.json({
      success: true,
      resumeUrl: resume.fileUrl,
      analysis: mockAnalysis
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { uploadResume, getAnalysis }