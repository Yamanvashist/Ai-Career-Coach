import { Bot, Clock3, SendHorizontal, User, Target } from "lucide-react";

const Session = () => {
  return (
    // Assuming the sidebar is outside this component, this is your main right-side content area
    <div className="h-full w-full bg-stone-50 p-6 lg:p-8">
      <div className="flex items-center justify-center max-w-7xl mx-auto h-full flex-col gap-6 lg:flex-row lg:gap-8">
        
        {/* Left Side: Stats & Tracking */}
        <div className="flex w-full flex-col gap-6 lg:w-80">
          
          {/* Avatar Profile */}
          <div className="flex items-center gap-4 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <User size={32} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Candidate</h2>
              <p className="text-sm font-medium text-emerald-600">Ready to code</p>
            </div>
          </div>

          {/* Interview Status & Countdown */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-emerald-600 p-8 text-white shadow-lg">
            <div className="absolute -right-4 -top-4 opacity-10">
              <Clock3 size={120} />
            </div>
            <p className="mb-1 font-medium text-emerald-100">Time Remaining</p>
            <h3 className="text-6xl font-extrabold tracking-tight">00:60</h3>
          </div>

          {/* Question Tracker */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="mb-1 text-sm font-medium text-gray-500">Progress</p>
                <p className="text-xl font-bold text-gray-900">
                  Question 1 <span className="text-sm text-gray-400">/ 10</span>
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Target size={20} />
              </div>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[10%] rounded-full bg-emerald-500"></div>
            </div>
          </div>
          
        </div>

        {/* Right Side: Main Question Area */}
        <div className="flex flex-1 flex-col gap-6">
          
          {/* Header & Question */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Bot size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">AI Interview Questions</h1>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-emerald-500"></div>
              <span className="mb-3 inline-block rounded-lg bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                MERN Stack
              </span>
              <h2 className="text-xl font-semibold leading-relaxed text-gray-800">
                Explain the Virtual DOM and why React uses it. How does it improve performance compared to the real DOM?
              </h2>
            </div>
          </div>

          {/* Textarea & Submit */}
          <div className="flex flex-1 flex-col rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <label className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-700">
              Your Answer
              <span className="text-emerald-500">*</span>
            </label>
            <textarea
              className="flex-1 resize-none rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-50"
              placeholder="Spit your facts here before the timer drops..."
            />
            
            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-sm transition-colors hover:bg-emerald-700 hover:shadow-md">
                Submit Answer
                <SendHorizontal size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Session;