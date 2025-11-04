import { Code, Zap, Boxes } from 'lucide-react';

const skills = [
  {
    icon: <Code size={18} />, title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion']
  },
  {
    icon: <Zap size={18} />, title: 'Foundations', items: ['JavaScript', 'TypeScript', 'Accessibility', 'Performance']
  },
  {
    icon: <Boxes size={18} />, title: 'Tools', items: ['Git', 'Figma', 'Spline', 'REST']
  },
];

function Card({ icon, title, items }) {
  return (
    <div className="group rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 hover:from-white/[0.09] transition">
      <div className="flex items-center gap-2 text-cyan-300/90">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((i) => (
          <span key={i} className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-white/80 ring-1 ring-white/10">{i}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-sm text-cyan-300/80">Keahlian</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Teknologi dan kemampuan utama</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <Card key={s.title} icon={s.icon} title={s.title} items={s.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
