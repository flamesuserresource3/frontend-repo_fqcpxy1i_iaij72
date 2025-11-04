import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Code2, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                <Rocket size={14} />
                Available for freelance projects
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Building interactive, modern web experiences
              </h1>
              <p className="text-white/70 max-w-xl">
                I’m a frontend developer crafting delightful interfaces with React, TypeScript, and
                motion. I blend performance, accessibility, and playful micro‑interactions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 text-white shadow hover:brightness-110 transition"
                >
                  <Code2 size={18} />
                  View selected work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/15 bg-white/5 hover:bg-white/10 transition"
                >
                  Let’s talk <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-2 text-xs text-white/60">
              {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite', 'Accessibility'].map(
                (t) => (
                  <div key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center">
                    {t}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/10">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
