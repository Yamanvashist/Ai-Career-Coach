import { HandCoins } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
     <nav className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8 shrink-0">
        <h1 className="font-bold text-2xl text-slate-900 tracking-tight">
          RefineAi Review
        </h1>
        <div className="px-3 py-1.5 border border-orange-200 rounded-full text-sm font-semibold bg-orange-50 flex items-center gap-2 text-cyan-700 shadow-sm">
          <HandCoins className="w-4 h-4 text-cyan-500" />
          <span>0 Credits left</span>
        </div>
      </nav>
  )
}

export default Navbar