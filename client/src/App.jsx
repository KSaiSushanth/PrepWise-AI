function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">
          PrepWise AI 🚀
        </h1>
        <p className="text-gray-400 text-lg">
          Your AI-powered interview coach
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-2xl mb-2">📄</div>
            <p>Resume Analysis</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-2xl mb-2">🗺️</div>
            <p>Study Roadmap</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-2xl mb-2">🎤</div>
            <p>Mock Interviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App