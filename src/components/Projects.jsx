import { ExternalLink, Code, Star } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'UI dashboard modern dengan animasi halus dan tema gelap neon.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    desc: 'Halaman produk imersif dengan integrasi 3D interaktif.',
    tags: ['Spline', 'Three', 'UX'],
    link: '#',
  },
  {
    title: 'Portfolio Minimal',
    desc: 'Desain minimalis yang fokus pada tipografi dan kesederhanaan.',
    tags: ['Design', 'Performance'],
    link: '#',
  },
];

function Badge({ children }) {
  return (
    <span className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-white/80 ring-1 ring-white/10">{children}</span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm text-cyan-300/80">Proyek Pilihan</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Karya yang Saya Banggakan</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Code size={16} /> Ayo bangun sesuatu bersama
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] hover:from-white/[0.09] transition">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-amber-300/90 mb-3">
                  <Star size={16} />
                  <span className="text-xs">Featured</span>
                </div>
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-5">
                  <a href={p.link} className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
                    Kunjungi <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
