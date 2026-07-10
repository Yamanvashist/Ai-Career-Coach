const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Resume",
      description:
        "Upload your existing resume and tell CareerPilot about your target role.",
    },
    {
      number: "02",
      title: "Receive AI Analysis",
      description:
        "Get detailed insights on resume quality, strengths, weaknesses, and skill gaps.",
    },
    {
      number: "03",
      title: "Follow Your Roadmap",
      description:
        "Receive a personalized learning roadmap designed around your career goals.",
    },
    {
      number: "04",
      title: "Track Progress",
      description:
        "Monitor your improvement, complete milestones, and prepare confidently for interviews.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-28 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-blue-600 text-sm font-medium uppercase tracking-wider">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            A Simple Path To Career Growth
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            CareerPilot guides you from resume analysis to interview readiness
            with a personalized AI-powered journey.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <span className="text-4xl font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;