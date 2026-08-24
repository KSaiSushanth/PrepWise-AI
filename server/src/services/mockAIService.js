// Mock AI responses — replaced with real Gemini API in Phase 6

const generateMockRoadmap = (setup) => {
  const { weakTopics } = setup

  const baseTopics = [
    { name: 'JavaScript Fundamentals',      priority: 'High',   order: 1 },
    { name: 'Data Structures & Algorithms', priority: 'High',   order: 2 },
    { name: 'React.js & Hooks',             priority: 'High',   order: 3 },
    { name: 'Node.js & Express.js',         priority: 'High',   order: 4 },
    { name: 'MongoDB & Mongoose',           priority: 'High',   order: 5 },
    { name: 'REST API Design',              priority: 'Medium', order: 6 },
    { name: 'Authentication & JWT',         priority: 'Medium', order: 7 },
    { name: 'System Design Basics',         priority: 'Medium', order: 8 },
    { name: 'Git & Version Control',        priority: 'Low',    order: 9 },
    { name: 'CSS & Responsive Design',      priority: 'Low',    order: 10 },
  ]

  // Boost priority for topics the user marked as weak
  return baseTopics.map(topic => {
    const isWeak = weakTopics.some(weak =>
      topic.name.toLowerCase().includes(weak.toLowerCase())
    )
    return {
      ...topic,
      priority: isWeak ? 'High' : topic.priority,
      status: 'pending'
    }
  })
}

const generateMockLesson = (topic) => {
  return {
    definition: `${topic} is a core concept in modern software development.`,
    fundamentals: `The fundamentals of ${topic} include understanding its core principles, syntax, and common patterns.`,
    intermediate: `Intermediate ${topic} involves advanced patterns, performance considerations, and best practices.`,
    advanced: `Advanced ${topic} covers optimization techniques and enterprise-level implementation.`,
    examples: `Practical example of ${topic}: [Code and explanation here]`,
    bestPractices: `Key best practices: 1) Follow conventions 2) Write clean code 3) Test thoroughly`,
    commonMistakes: `Common mistakes: 1) Skipping fundamentals 2) Over-engineering 3) Ignoring performance`,
    interviewQs: [
      `What is ${topic} and why is it important?`,
      `Explain the core principles of ${topic}`,
      `What are common use cases for ${topic}?`,
      `What are best practices when using ${topic}?`,
      `How does ${topic} compare to alternatives?`
    ],
    quiz: [
      {
        question: `What is the primary purpose of ${topic}?`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        answer: 'Option A'
      }
    ],
    revisionNotes: `Key points: Focus on fundamentals, practice regularly, understand the why.`
  }
}

const generateMockInterviewQuestion = (type, topic, company) => {
  const questions = {
    Technical: [
      `Explain how ${topic} works under the hood.`,
      `What are the key differences between ${topic} and its alternatives?`,
      `How would you optimize ${topic} for performance?`,
      `Describe a real project where you used ${topic}.`,
      `What are common pitfalls when using ${topic}?`
    ],
    HR: [
      `Tell me about yourself and your journey into software development.`,
      `Why do you want to work at ${company}?`,
      `Describe a challenging situation you faced and how you handled it.`,
      `Where do you see yourself in 5 years?`,
      `What are your greatest strengths and weaknesses?`
    ],
    Resume: [
      `Walk me through your most complex project.`,
      `What was your biggest technical challenge in your projects?`,
      `How did you choose the tech stack for your projects?`,
      `What would you improve in your existing projects?`,
      `How did you handle bugs and issues in your projects?`
    ]
  }

  const list = questions[type] || questions.Technical
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

module.exports = {
  generateMockRoadmap,
  generateMockLesson,
  generateMockInterviewQuestion
}