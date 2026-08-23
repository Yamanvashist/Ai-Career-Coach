import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tighter">CoachAI.</h3>
          <p className="text-sm">
            Your personal AI career coach. We help you land jobs, not just scroll through them.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition">Features</Link></li>
            <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white transition">Resume Builder</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition">Interview Prep</Link></li>
            <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-white transition"><Github className="w-5 h-5" /></Link>
          </div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-800 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} CoachAI. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">Privacy</Link>
          <Link href="#" className="hover:text-white transition">Terms</Link>
        </div>
      </div>
    </footer>
  );
}