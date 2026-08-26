import { useState, useEffect } from 'react'
import API from '../api/axios'

const INTERVIEW_TYPES = ['Technical', 'HR', 'Resume']

// stage: 'list' | 'setup' | 'active' | 'completed'

function InterviewPage() {
  const [stage, setStage]           = useState('list')
  const [interviews, setInterviews] = useState([])
  const [session, setSession]       = useState(null)   // active interview doc
  const [answer, setAnswer]         = useState('')
  const [loading, setLoading]       = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [starting, setStarting]     = useState(false)
  const [error, setError]           = useState('')

  // Setup form state
  const [setupForm, setSetupForm] = useState({
    type: 'Technical', targetCompany: '', targetRole: ''
  })

  // Fetch past interviews on mount
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await API.get('/interview/sessions')
        setInterviews(res.data.interviews || [])
      } catch (err) {
        setError('Failed to load interviews')
      } finally {
        setLoading(false)
      }
    }
    fetchInterviews()
  }, [])

  // Start a new interview session
  const handleStart = async (e) => {
    e.preventDefault()
    setStarting(true)
    setError('')
    try {
      const res = await API.post('/interview/session', setupForm)
      setSession(res.data.interview)
      setStage('active')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to start interview')
    } finally {
      setStarting(false)
    }
  }

  // Submit an answer and get the next question (or finish)
  const handleSubmitAnswer = async (finished = false) => {
    if (!answer.trim() && !finished) return
    setSubmitting(true)
    setError('')
    try {
      const res = await API.post(`/interview/answer/${session._id}`, {
        answer: answer.trim(),
        finished
      })
      setSession(res.data.interview)
      setAnswer('')

      // If interview is completed, move to results stage
      if (res.data.interview.status === 'completed') {
        setStage('completed')
        setInterviews(prev => [res.data.interview, ...prev])
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit answer')
    } finally {
      setSubmitting(false)
    }
  }

  // Current question = last question in the array that has no answer yet
  const currentQuestion = session?.questions?.[session.questions.length - 1]
  const answeredCount   = session?.questions?.filter(q => q.userAnswer)?.length || 0

  // ── COMPLETED STAGE ─────────────────────────────────────────────────────────
  if (stage === 'completed' && session) {
    return (
      <div className="space-y-8 max-w-3xl">
        <div className="text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-white">Interview Complete!</h1>
          <p className="text-gray-400 mt-2">{session.type} Interview</p>
          <div className="text-6xl font-bold text-blue-400 mt-6">{session.overallScore}%</div>
          <p className="text-gray-500 mt-2">Overall Score</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">📋 Review</h2>
          {session.questions.map((q, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-3">
              <p className="text-blue-400 font-medium">Q{i + 1}: {q.question}</p>
              <div>
                <p className="text-gray-500 text-xs mb-1">Your Answer:</p>
                <p className="text-gray-300 text-sm">{q.userAnswer || '—'}</p>
              </div>
              {q.aiEvaluation && (
                <div>
                  <p className="text-gray-500 text-xs mb-1">AI Feedback:</p>
                  <p className="text-gray-300 text-sm">{q.aiEvaluation}</p>
                </div>
              )}
              {q.score != null && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Score:</span>
                  <span className={`text-sm font-bold ${q.score >= 70 ? 'text-green-400' : q.score >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {q.score}%
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => { setStage('list'); setSession(null) }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Back to Interviews
        </button>
      </div>
    )
  }

  // ── ACTIVE INTERVIEW STAGE ───────────────────────────────────────────────────
  if (stage === 'active' && session) {
    return (
      <div className="space-y-6 max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">🎤 {session.type} Interview</h1>
            <p className="text-gray-400 text-sm mt-0.5">
              {session.targetRole} at {session.targetCompany || 'General'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-blue-400 font-bold text-lg">Q{answeredCount + 1}</p>
            <p className="text-gray-500 text-xs">{answeredCount} answered</p>
          </div>
        </div>

        {error && <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-lg text-sm">{error}</div>}

        {/* Current Question */}
        {currentQuestion && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
              <p className="text-blue-300 font-medium leading-relaxed">{currentQuestion.question}</p>
            </div>

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={5}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />

            <div className="flex gap-3">
              <button
                onClick={() => handleSubmitAnswer(false)}
                disabled={submitting || !answer.trim()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors"
              >
                {submitting ? 'Submitting...' : 'Next Question →'}
              </button>
              <button
                onClick={() => handleSubmitAnswer(true)}
                disabled={submitting}
                className="px-6 bg-green-700 hover:bg-green-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors"
              >
                Finish
              </button>
            </div>
          </div>
        )}

        {/* Previous Q&As in this session */}
        {answeredCount > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-gray-400 mb-3">Previous Questions</h2>
            <div className="space-y-2">
              {session.questions.slice(0, -1).map((q, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Q{i + 1}: {q.question}</p>
                  <p className="text-gray-300 text-xs mt-1">✍️ {q.userAnswer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── SETUP STAGE ──────────────────────────────────────────────────────────────
  if (stage === 'setup') {
    return (
      <div className="space-y-8 max-w-lg">
        <div>
          <h1 className="text-3xl font-bold text-white">🎤 New Interview</h1>
          <p className="text-gray-400 mt-1">Configure your mock interview session.</p>
        </div>

        {error && <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-lg text-sm">{error}</div>}

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <form onSubmit={handleStart} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Interview Type</label>
              <div className="flex gap-3">
                {INTERVIEW_TYPES.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSetupForm({ ...setupForm, type: t })}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      setupForm.type === t
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Target Company <span className="text-gray-600">(optional)</span></label>
              <input
                type="text"
                value={setupForm.targetCompany}
                onChange={(e) => setSetupForm({ ...setupForm, targetCompany: e.target.value })}
                placeholder="Google, Amazon..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Target Role <span className="text-gray-600">(optional)</span></label>
              <input
                type="text"
                value={setupForm.targetRole}
                onChange={(e) => setSetupForm({ ...setupForm, targetRole: e.target.value })}
                placeholder="Frontend Developer, SDE-1..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStage('list')}
                className="px-5 py-3 border border-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={starting}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors"
              >
                {starting ? 'Starting...' : '▶ Start Interview'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // ── LIST STAGE (default) ─────────────────────────────────────────────────────
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">🎤 Mock Interviews</h1>
          <p className="text-gray-400 mt-1">Practice Technical, HR, and Resume interviews.</p>
        </div>
        <button
          onClick={() => setStage('setup')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          + New Interview
        </button>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-lg text-sm">{error}</div>}

      {loading ? (
        <p className="text-gray-400">Loading interviews...</p>
      ) : interviews.length > 0 ? (
        <div className="space-y-3">
          {interviews.map((iv) => (
            <div key={iv._id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-white font-medium">{iv.type} Interview</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${iv.status === 'completed' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                    {iv.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-0.5">
                  {iv.targetRole && `${iv.targetRole}`}
                  {iv.targetCompany && ` @ ${iv.targetCompany}`}
                  {' • '}{new Date(iv.createdAt).toLocaleDateString()}
                </p>
              </div>
              {iv.status === 'completed' && (
                <span className={`text-2xl font-bold ${iv.overallScore >= 70 ? 'text-green-400' : iv.overallScore >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {iv.overallScore}%
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-4">🎤</div>
          <p className="text-gray-400 mb-2">No interviews yet.</p>
          <p className="text-gray-600 text-sm">Click New Interview to start practicing!</p>
        </div>
      )}
    </div>
  )
}

export default InterviewPage
