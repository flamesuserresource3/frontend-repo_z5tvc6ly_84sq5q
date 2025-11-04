import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center relative">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
            </div>
            <div>
              <p className="text-sm text-cyan-300/80">Mari Terhubung</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white tracking-tight">Siap memulai proyek berikutnya?</h3>
              <p className="mt-3 text-white/70">Kirim pesan kapan saja. Saya akan membalas secepatnya untuk mendiskusikan ide dan kebutuhan Anda.</p>
              <a href="mailto:hello@example.com" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
                <Mail size={16} /> Kirim Email
              </a>
            </div>
            <div className="md:justify-self-end flex md:flex-col gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 transition">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/15 ring-1 ring-white/15 transition">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
