import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">/</span>
          Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#home" className="hover:text-white transition">Beranda</a>
          <a href="#projects" className="hover:text-white transition">Proyek</a>
          <a href="#contact" className="hover:text-white transition">Kontak</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
