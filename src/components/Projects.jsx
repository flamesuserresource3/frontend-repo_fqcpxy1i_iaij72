import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Dashboard',
    description:
      'A performant analytics dashboard with live charts, virtualized tables, and themeable UI.',
    tags: ['React', 'TypeScript', 'Tailwind', 'WebSockets'],
    image:
      'https://images.unsplash.com/photo-1551281044-8e146f67b95a?q=80&w=1200&auto=format&fit=crop',
    site: '#',
    repo: '#',
  },
  {
    title: '3D Product Explorer',
    description:
      'Interactive 3D product viewer integrated with Spline and smooth camera transitions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    site: '#',
    repo: '#',
  },
  {
    title: 'Design System Kit',
    description:
      'A reusable component library with accessible primitives and composable APIs.',
    tags: ['Radix', 'Tailwind', 'Storybook'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    site: '#',
    repo: '#',
  },
];

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-white/70">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-md border border-white/10 bg-white/5">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.site}
            className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 border border-white/10 hover:bg-white/10"
          >
            <ExternalLink size={16} /> Live
          </a>
          <a
            href={project.repo}
            className="inline-flex items-center gap-2 text-sm rounded-lg px-3 py-2 border border-white/10 hover:bg-white/10"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 -z-[0] pointer-events-none bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Selected Projects</h2>
            <p className="text-white/70 text-sm">A mix of client work, experiments, and open source.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm border border-white/10 hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
