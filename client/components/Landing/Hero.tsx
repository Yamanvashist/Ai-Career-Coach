const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <div className="mt-10 md:inline-flex items-center rounded-full border border-gray-200 px-4  text-sm font-medium text-gray-700 mb-6">
              AI-Powered Career Coach
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Navigate Your Career
              <br />
              With Confidence
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Analyze resumes, identify skill gaps, generate
              personalized learning roadmaps, and prepare for
              interviews with AI-powered guidance.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                Get Started
              </button>

              <button className="border border-gray-300 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-xl font-medium transition-colors">
                View Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
              <p>✓ Resume Analysis</p>
              <p>✓ Skill Gap Detection</p>
              <p>✓ Interview Prep</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">

              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-900">
                  Career Dashboard
                </h3>

                <span className="text-sm text-blue-600 font-medium">
                  Updated Today
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-500">Resume Score</p>
                  <h2 className="text-3xl font-bold mt-2">87%</h2>
                </div>

                <div className="border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-500">
                    Interview Readiness
                  </p>
                  <h2 className="text-3xl font-bold mt-2">81%</h2>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 col-span-2">
                  <p className="text-sm text-gray-500">
                    Skill Gap Analysis
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between">
                      <span>TypeScript</span>
                      <span>90%</span>
                    </div>

                    <div className="flex justify-between">
                      <span>System Design</span>
                      <span>45%</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Node.js</span>
                      <span>72%</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 col-span-2">
                  <p className="text-sm text-gray-500">
                    Learning Roadmap
                  </p>

                  <div className="mt-3 space-y-3">
                    <div className="h-2 bg-blue-600 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;