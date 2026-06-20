const Features = () => {
  const features = [
    {
      title: "Resume Analysis",
      description:
        "Get detailed feedback on your resume and discover improvements recruiters look for.",
    },
    {
      title: "Skill Gap Detection",
      description:
        "Identify missing skills for your target role and understand what to learn next.",
    },
    {
      title: "Career Roadmaps",
      description:
        "Receive a personalized learning roadmap tailored to your career goals.",
    },
    {
      title: "Interview Preparation",
      description:
        "Practice common interview questions and improve your confidence.",
    },
    {
      title: "Progress Tracking",
      description:
        "Track your learning journey with measurable milestones and goals.",
    },
    {
      title: "AI Career Insights",
      description:
        "Get actionable recommendations based on market trends and your profile.",
    },
  ];

  return (
    <section id="features" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Everything You Need To Advance Your Career
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            CareerPilot helps you understand where you are, where you want to
            go, and how to get there with AI-powered guidance.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
