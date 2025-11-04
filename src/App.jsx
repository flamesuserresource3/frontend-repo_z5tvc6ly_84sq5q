import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} — Dibuat dengan estetika, teknologi, dan sedikit keajaiban.
      </footer>
    </div>
  );
}

export default App;
