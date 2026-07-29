import {
  Download,
  Award,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Target,
  Clock,
  BarChart3,
  ShieldCheck,
  FileText,
  RotateCcw,
  BookOpen,
  ArrowLeft,
} from 'lucide-react';

export default function InterviewResults() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 font-sans text-gray-800">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">Interview Results</h1>
            <span className="p-1 bg-green-100 text-green-700 rounded-md">
              <Award className="w-4 h-4" />
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Frontend Developer Interview • July 16, 2026 • 8:34 PM
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 text-green-700 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors bg-white shadow-sm">
          <Download className="w-4 h-4" />
          Download Report
        </button>
      </div>

      {/* Top Hero Score Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left: Score Circle + Verdict */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
          {/* Custom SVG Donut Chart */}
          <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                className="text-gray-100 stroke-current"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                className="text-green-600 stroke-current"
                strokeWidth="10"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 - (251.2 * 86) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-gray-900">86</span>
              <span className="text-xs text-gray-400 font-medium">/ 100</span>
            </div>
          </div>

          {/* Verdict Text */}
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <BarChart3 className="w-3.5 h-3.5" /> Overall Score
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Great Performance!</h2>
            <p className="text-sm text-gray-500 mt-1 max-w-xs">
              You demonstrated strong technical knowledge with a few areas to improve.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 fill-green-100" />
              <div>
                <span className="text-xs font-bold text-green-800 uppercase mr-1">Hire</span>
                <span className="text-xs text-gray-600">Strong candidate. Ready to contribute.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 4 Stat Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0">
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
              <HelpCircle className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-500">Total Questions</span>
            <span className="text-xl font-bold text-gray-900 mt-0.5">25</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-500">Correct Answers</span>
            <span className="text-xl font-bold text-gray-900 mt-0.5">21</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-500">Accuracy</span>
            <span className="text-xl font-bold text-gray-900 mt-0.5">84%</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs text-gray-500">Time Taken</span>
            <span className="text-xl font-bold text-gray-900 mt-0.5">48m 12s</span>
          </div>
        </div>
      </div>

      {/* Middle Row: 3 Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1: Topic Performance */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-green-600" />
            <h3 className="font-bold text-gray-900">Topic Performance</h3>
          </div>
          <div className="space-y-4">
            {[
              { name: 'React', score: 82, color: 'bg-green-600', icon: '⚛️' },
              { name: 'JavaScript', score: 91, color: 'bg-green-600', icon: 'JS' },
              { name: 'Node.js', score: 76, color: 'bg-green-600', icon: '🟢' },
              { name: 'MongoDB', score: 58, color: 'bg-amber-500', icon: '🍃' },
              { name: 'Express', score: 84, color: 'bg-green-600', icon: 'ex' },
              { name: 'SQL', score: 40, color: 'bg-red-500', icon: '🛢️' },
            ].map((topic) => (
              <div key={topic.name}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700 flex items-center gap-2">
                    <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">
                      {topic.icon}
                    </span>
                    {topic.name}
                  </span>
                  <span className="font-semibold text-gray-900">
                    <span className={topic.score < 50 ? 'text-red-500' : topic.score < 70 ? 'text-amber-500' : 'text-green-600'}>
                      {topic.score}
                    </span>{' '}
                    <span className="text-gray-400 font-normal">/ 100</span>
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`${topic.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${topic.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Strengths */}
        <div className="bg-green-50/40 rounded-2xl border border-green-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <h3 className="font-bold text-gray-900">Strengths</h3>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Excellent React understanding',
                desc: 'Strong grasp of components, hooks, and state management.',
              },
              {
                title: 'Strong communication',
                desc: 'Clear and well-structured explanations throughout the interview.',
              },
              {
                title: 'Good problem solving',
                desc: 'Approached problems logically and optimized solutions.',
              },
              {
                title: 'Consistent code quality',
                desc: 'Clean, readable, and well-structured code in most answers.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5 fill-green-100" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Areas for Improvement */}
        <div className="bg-amber-50/40 rounded-2xl border border-amber-100/80 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-gray-900">Areas for Improvement</h3>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Improve MongoDB knowledge',
                desc: 'Need deeper understanding of aggregations, indexes, and relationships.',
              },
              {
                title: 'Explain optimization approaches',
                desc: 'Could provide more details on time and space complexity.',
              },
              {
                title: 'Give more practical examples',
                desc: 'Include real-world use cases to strengthen your answers.',
              },
              {
                title: 'Deepen SQL join concepts',
                desc: 'More practice needed with advanced joins and subqueries.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-100" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary Card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6 flex items-center justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="p-1.5 bg-green-50 text-green-600 rounded-lg">
              <FileText className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-gray-900">Overall Summary</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            The candidate performed well throughout the interview. They showed strong proficiency in core JavaScript concepts, React fundamentals, and Express.js. Their approach to problem solving is logical and structured. However, they struggled with some MongoDB queries and SQL concepts. With a bit more depth in backend data handling and database optimization, they will be an excellent asset to the team.
          </p>
        </div>
        {/* Decorative Graphic Representation */}
        <div className="hidden lg:flex items-center justify-center w-28 h-28 bg-green-50/60 rounded-2xl border border-green-100 text-green-600 shrink-0">
          <Award className="w-12 h-12" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-700 rounded-xl text-sm font-semibold hover:bg-green-50 transition-colors bg-white">
          <RotateCcw className="w-4 h-4" />
          Retake Interview
        </button>
        
        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors">
          <BookOpen className="w-4 h-4" />
          Practice Weak Topics
        </button>

        <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-700 rounded-xl text-sm font-semibold hover:bg-green-50 transition-colors bg-white">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}