import { useState } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-lg font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">dev.portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
                >
                  <Github size={18} />
                  <span className="hidden lg:inline">GitHub</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 text-white shadow hover:brightness-110 transition"
                >
                  <Mail size={18} />
                  <span className="hidden lg:inline">Hire me</span>
                </a>
              </div>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 border border-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 pt-2 border-t border-white/10">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex-1 inline-flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 text-white shadow hover:brightness-110 transition"
                  >
                    <Mail size={18} /> Hire me
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
