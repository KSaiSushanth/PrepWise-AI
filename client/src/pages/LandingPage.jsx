import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">
          PrepWise AI 🚀
        </h1>
        <p className="text-gray-400 text-xl mb-2">
          Your AI-powered interview preparation coach
        </p>
        <p className="text-gray-500 text-sm mb-10 max-w-md">
          Upload your resume, get a personalized study roadmap,
          learn with an AI tutor, and ace your mock interviews.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started Free
          </Link>
          <Link
            to="/login"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="font-semibold text-white mb-2">Resume Analysis</h3>
            <p className="text-gray-400 text-sm">Upload your resume and get AI-powered insights on skills and gaps</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-3">🗺️</div>
            <h3 className="font-semibold text-white mb-2">Study Roadmap</h3>
            <p className="text-gray-400 text-sm">Get a personalized learning path based on your target company and role</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-3">🎤</div>
            <h3 className="font-semibold text-white mb-2">Mock Interviews</h3>
            <p className="text-gray-400 text-sm">Practice Technical, HR, and Resume questions with AI feedback</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage