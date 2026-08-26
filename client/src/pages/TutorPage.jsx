import { useState, useEffect } from 'react'
import API from '../api/axios'

// Expandable section component — used for each part of the lesson
function LessonSection({ title, content }) {
  const [open, setOpen] = useState(false)

  if (!content) return null

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-800 hover:bg-gray-750 text-left transition-colors"
      >
        <span className="font-medium text-white">{title}</span>
        <span className="text-gray-400 text-lg">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-4 py-4 bg-gray-900 text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
          {typeof content === 'string' ? content : JSON.stringify(content, null, 2)}
        </div>
      )}
    </div>
  )
}

function TutorPage() {
  const [sessions, setSessions]           = useState([])
  const [activeSession, setActiveSession] = useState(null)
  const [topic, setTopic]                 = useState('')
  const [loading, setLoading]             = useState(true)
  const [starting, setStarting]           = useState(false)
  const [error, setError]                 = useState('')

  // Fetch past sessions on mount
  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await API.get('/tutor/sessions')
        setSessions(res.data.sessions || [])
      } catch (err) {
        setError('Failed to load sessions')
      } finally {
        setLoading(false)
      }
    }
    fetchSessions()
  }, [])

  // Start a new lesson session
  const handleStartSession = async (e) => {
    e.preventDefault()
    if (!topic.trim()) return
    setStarting(true)
    setError('')
    try {
      const res = await API.post('/tutor/session', { topic: topic.trim() })
      setActiveSession(res.data.session)
      setSessions(prev => [res.data.session, ...prev])
      setTopic('')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to start session')
    } finally {
      setStarting(false)
    }
  }

  // View a past session
  const handleViewSession = async (sessionId) => {
    try {
      const res = await API.get(`/tutor/session/${sessionId}`)
      setActiveSession(res.data.session)
    } catch (err) {
      setError('Failed to load session')
    }
  }

  // ── ACTIVE LESSON VIEW ──────────────────────────────────────────────────────
  if (activeSession) {
    const lesson = activeSession.lesson

    return (
      <div className="space-y-6 max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">📚 {activeSession.topic}</h1>
            <p className="text-gray-400 mt-1">AI-generated lesson</p>
          </div>
          <button
            onClick={() => setActiveSession(null)}
            className="text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            ← Back to Sessions
          </button>
        </div>

        {/* Definition — always visible */}
        {lesson?.definition && (
          <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-5">
            <h2 className="text-blue-400 font-semibold mb-2">📌 Definition</h2>
            <p className="text-gray-200 text-sm leading-relaxed">{lesson.definition}</p>
          </div>
        )}

        {/* Expandable lesson sections */}
        <div className="space-y-2">
          <LessonSection title="🔰 Fundamentals"      content={lesson?.fundamentals} />
          <LessonSection title="⚙️ Intermediate"       content={lesson?.intermediate} />
          <LessonSection title="🚀 Advanced"           content={lesson?.advanced} />
          <LessonSection title="💡 Examples"           content={lesson?.examples} />
          <LessonSection title="✅ Best Practices"     content={lesson?.bestPractices} />
          <LessonSection title="⚠️ Common Mistakes"    content={lesson?.commonMistakes} />
          <LessonSection title="🎯 Interview Questions" content={lesson?.interviewQs} />
          <LessonSection title="📝 Revision Notes"     content={lesson?.revisionNotes} />
        </div>

        {/* Quiz */}
        {lesson?.quiz?.length > 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">🧠 Quick Quiz</h2>
            <div className="space-y-4">
              {lesson.quiz.map((q, i) => (
                <div key={i} className="bg-gray-800 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">Q{i + 1}: {q.question}</p>
                  <p className="text-gray-400 text-sm"><span className="text-green-400">Answer:</span> {q.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── SESSION LIST VIEW ───────────────────────────────────────────────────────
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">📚 AI Tutor</h1>
        <p className="text-gray-400 mt-1">Enter a topic and get an AI-generated lesson instantly.</p>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-lg text-sm">{error}</div>}

      {/* Start New Session */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Start New Lesson</h2>
        <form onSubmit={handleStartSession} className="flex gap-3">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. React Hooks, System Design, JavaScript Closures..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            disabled={starting || !topic.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            {starting ? 'Generating...' : '▶ Start Lesson'}
          </button>
        </form>
      </div>

      {/* Past Sessions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Past Sessions</h2>
        {loading ? (
          <p className="text-gray-400">Loading sessions...</p>
        ) : sessions.length > 0 ? (
          <div className="space-y-3">
            {sessions.map((s) => (
              <div
                key={s._id}
                className="bg-gray-900 border border-gray-800 hover:border-blue-700 rounded-xl p-5 flex items-center justify-between cursor-pointer transition-colors"
                onClick={() => handleViewSession(s._id)}
              >
                <div>
                  <p className="text-white font-medium">{s.topic}</p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {new Date(s.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'short', year: 'numeric'
                    })}
                  </p>
                </div>
                <span className="text-blue-400 text-sm">View →</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
            <p className="text-gray-500">No sessions yet. Start your first lesson above!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TutorPage
