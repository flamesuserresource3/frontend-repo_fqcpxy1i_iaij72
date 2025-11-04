import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B13] via-[#0B0B13] to-[#0B0B13] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.25),transparent)]" />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>
            Built with React · Tailwind · Framer Motion · Spline
          </p>
        </div>
      </footer>
    </div>
  );
}
