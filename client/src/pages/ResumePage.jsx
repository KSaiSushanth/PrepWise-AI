import { useState, useEffect, useRef } from 'react'
import API from '../api/axios'

function ResumePage() {
  const [resume, setResume]                   = useState(null)
  const [analysis, setAnalysis]               = useState(null)
  const [uploading, setUploading]             = useState(false)
  const [loadingAnalysis, setLoadingAnalysis] = useState(false)
  const [error, setError]                     = useState('')
  const [success, setSuccess]                 = useState('')
  const fileRef = useRef()

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await API.get('/resume/analysis')
        setResume(res.data)
        setAnalysis(res.data.analysis)
      } catch (err) {
        if (err.response?.status !== 404) setError('Failed to load resume data')
      }
    }
    fetchResume()
  }, [])

  const handleUpload = async (e) => {
    e.preventDefault()
    const file = fileRef.current?.files[0]
    if (!file) return setError('Please select a PDF file')
    if (file.type !== 'application/pdf') return setError('Only PDF files allowed')
    setUploading(true)
    setError('')
    setSuccess('')
    const formData = new FormData()
    formData.append('resume', file)
    try {
      const res = await API.post('/resume/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setSuccess('Resume uploaded successfully!')
      setResume(res.data)
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleGetAnalysis = async () => {
    setLoadingAnalysis(true)
    setError('')
    try {
      const res = await API.get('/resume/analysis')
      setAnalysis(res.data.analysis)
      setSuccess('Analysis loaded!')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to get analysis')
    } finally {
      setLoadingAnalysis(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">📄 Resume</h1>
        <p className="text-gray-400 mt-1">Upload your resume and get AI-powered analysis.</p>
      </div>

      {error   && <div className="bg-red-900/30 border border-red-700 text-red-400 px-4 py-3 rounded-lg text-sm">{error}</div>}
      {success && <div className="bg-green-900/30 border border-green-700 text-green-400 px-4 py-3 rounded-lg text-sm">{success}</div>}

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Upload Resume (PDF)</h2>
        <form onSubmit={handleUpload} className="flex items-center gap-4 flex-wrap">
          <input ref={fileRef} type="file" accept=".pdf" className="text-gray-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer hover:file:bg-blue-700" />
          <button type="submit" disabled={uploading} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
        {resume?.resumeUrl && (
          <p className="text-gray-400 text-sm mt-3">
            Current resume: <a href={resume.resumeUrl} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">View PDF</a>
          </p>
        )}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">🤖 AI Analysis</h2>
          <button onClick={handleGetAnalysis} disabled={loadingAnalysis} className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition-colors">
            {loadingAnalysis ? 'Analysing...' : 'Get Analysis'}
          </button>
        </div>
        {analysis ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-blue-400 font-medium mb-2">Summary</h3>
              <p className="text-gray-300 text-sm">{analysis.summary}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-green-400 font-medium mb-2">✅ Strengths</h3>
                <ul className="space-y-1">{analysis.strengths?.map((s, i) => <li key={i} className="text-gray-300 text-sm">• {s}</li>)}</ul>
              </div>
              <div>
                <h3 className="text-red-400 font-medium mb-2">⚠️ Weaknesses</h3>
                <ul className="space-y-1">{analysis.weaknesses?.map((w, i) => <li key={i} className="text-gray-300 text-sm">• {w}</li>)}</ul>
              </div>
              <div>
                <h3 className="text-blue-400 font-medium mb-2">🛠️ Skills</h3>
                <div className="flex flex-wrap gap-2">{analysis.skills?.map((s, i) => <span key={i} className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-xs">{s}</span>)}</div>
              </div>
              <div>
                <h3 className="text-purple-400 font-medium mb-2">🚀 Technologies</h3>
                <div className="flex flex-wrap gap-2">{analysis.technologies?.map((t, i) => <span key={i} className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-xs">{t}</span>)}</div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Upload your resume then click Get Analysis.</p>
        )}
      </div>
    </div>
  )
}

export default ResumePage
