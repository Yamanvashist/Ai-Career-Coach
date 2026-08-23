import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-black dark:text-white tracking-tighter">CoachAI.</h3>
          <p className="text-sm">
            Your personal AI career coach. We help you land jobs, not just scroll through them.
          </p>
        </div>

        <div>
          <h4 className="text-black dark:text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Features</Link></li>
            <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Resume Builder</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black dark:text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Interview Prep</Link></li>
            <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Help Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black dark:text-white font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors"><FaGithub className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors"><FaXTwitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-black dark:hover:text-white transition-colors"><FaLinkedinIn className="w-5 h-5" /></Link>
          </div>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} CoachAI. Made by Yaman.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}