import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[240px,1fr] gap-8 items-center">
          <div className="relative">
            <div className="h-48 w-48 md:h-56 md:w-56 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
              <User className="text-white/70" size={64} />
            </div>
          </div>
          <div>
            <p className="text-sm text-cyan-300/80">Tentang Saya</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Membangun pengalaman digital yang berkesan</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Saya adalah seorang developer/designer yang fokus pada antarmuka modern, performa tinggi, dan detail yang rapi. 
              Saya percaya produk yang hebat lahir dari kolaborasi yang baik, komunikasi jelas, dan iterasi cepat.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="px-3 py-1 rounded-md bg-white/5 ring-1 ring-white/10">Frontend Engineering</span>
              <span className="px-3 py-1 rounded-md bg-white/5 ring-1 ring-white/10">UI/UX</span>
              <span className="px-3 py-1 rounded-md bg-white/5 ring-1 ring-white/10">Prototyping</span>
              <span className="px-3 py-1 rounded-md bg-white/5 ring-1 ring-white/10">Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
