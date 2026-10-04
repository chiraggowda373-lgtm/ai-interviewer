export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col relative overflow-hidden font-sans">
      
      {/* Animated Moving Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 bg-[url('/bg.jpg.jpg')] opacity-20 moving-bg"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/80 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center opacity-0 [animation:fadeInUp_0.8s_ease-out_forwards]">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          AI Interviewer <span className="text-sm text-slate-400 font-normal">v0.1</span>
        </div>
      </nav>

      {/* Main Content Grid */}
      <main className="relative z-10 flex-grow w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Value Proposition */}
        <div className="space-y-6 opacity-0 [animation:fadeInUp_0.8s_ease-out_0.1s_forwards]">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Master Your Next <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Technical Interview</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-md">
            Practice in a realistic environment with an AI-driven recruiter. Get real-time feedback, improve your answers, and build confidence before the real thing.
          </p>
          <ul className="space-y-3 text-slate-300 mt-6">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Industry-specific technical questions
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Voice-enabled interactions
            </li>
          </ul>
        </div>

        {/* Right Column: The Setup Form */}
        <div className="flex justify-center md:justify-end opacity-0 [animation:fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl [animation:float_6s_ease-in-out_infinite]">
            <h2 className="text-2xl font-semibold mb-6 text-white">Candidate Setup</h2>
            
            <form action="https://ai-interviewer-d5v8.onrender.com/start-interview" method="POST" className="space-y-5">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
              </div>

              {/* Role Dropdown */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-300 mb-2">Target Role</label>
                <select id="role" name="role" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none">
                  
                  {/* Existing Tech Roles */}
                  <option value="software_engineer">Software Engineer</option>
                  <option value="data_scientist">Data Scientist</option>
                  <option value="product_manager">Product Manager</option>
                  
                  {/* Additional Tech Roles */}
                  <option value="ai_engineer">AI Engineer</option>
                  <option value="database_administrator">Database Administrator</option>
                  <option value="frontend_developer">Frontend Developer</option>

                  {/* Non-Tech / Specialized Roles */}
                  <option value="police_sub_inspector">Police Sub-Inspector</option>
                  <option value="marketing_manager">Marketing Manager</option>
                  <option value="financial_analyst">Financial Analyst</option>
                </select>
              </div>

              {/* Animated Button */}
              <button type="submit" 
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 flex justify-center items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Start Interview
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}