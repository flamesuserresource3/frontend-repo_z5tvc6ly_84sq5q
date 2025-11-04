import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-32 -left-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300/90 bg-cyan-300/10 ring-1 ring-cyan-300/30 rounded-full px-3 py-1">
            <Sparkles size={14} /> Portofolio Interaktif
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Bangun kesan pertama yang modern, techy, dan aesthetic.
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            Saya merancang pengalaman digital yang halus dan menyenangkan. Jelajahi proyek pilihan dan ayo kolaborasi untuk karya berikutnya.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              <Rocket size={16} /> Lihat Proyek
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 transition">
              Hubungi Saya
            </a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[560px] rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 to-black ring-1 ring-white/10">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>
      </div>
    </section>
  );
}
