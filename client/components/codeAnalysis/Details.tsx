import React from 'react'

const Detail = [
  { title: "language", result: "Javascript" },
  { title: "Lines of code", result: "42" },
  { title: "Complexity", result: "Medium" },
  { title: "Submitted", result: "May 11 2026 11:30 AM" },
];

const Details = () => {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
              Details
            </h2>

            <div className="divide-y divide-gray-50">
              {Detail.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-4"
                >
                  <span className="text-sm font-medium text-gray-500">
                    {item.title}
                  </span>

                  {item.title === "Complexity" ? (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                      {item.result}
                    </span>
                  ) : (
                    <span className="text-sm font-semibold text-gray-900">
                      {item.result}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
  )
}

export default Details