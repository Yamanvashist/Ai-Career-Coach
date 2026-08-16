const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. You can upgrade or change your plan whenever you need more credits or faster review support.",
  },
  {
    question: "What are credits used for?",
    answer:
      "Credits power resume reviews, skill gap reports, interview question generation and custom coaching tasks.",
  },
  {
    question: "Do I need a subscription to use resources?",
    answer:
      "No. Free resources are available to all users, while higher subscriptions unlock more premium guidance and faster turnaround.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[30px] border border-slate-200/80 bg-slate-50 p-8 shadow-[0_25px_70px_-40px_rgba(37,99,235,0.25)] transition-colors dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Need help selecting a plan?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our plans are designed to fit every stage—from first-time resume
              upgrades to ongoing interview coaching and unlimited reviews.
            </p>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.45)] transition-colors dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Why teams and job seekers choose CareerPilot
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              You get practical guidance, faster resume improvements, interview prep, and clear next steps backed by AI insights.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "AI-powered resume feedback with recruiter-focused suggestions",
                "Clear skill roadmap for your target role and career stage",
                "Interview readiness support that improves confidence over time",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                  <span className="mt-1 text-blue-600 dark:text-blue-400">✓</span>
                  <span className="text-slate-700 dark:text-slate-200">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}