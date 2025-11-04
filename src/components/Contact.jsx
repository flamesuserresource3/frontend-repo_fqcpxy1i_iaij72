import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something great</h2>
            <p className="mt-3 text-white/70">
              I’m open to freelance work, collaborations, and interesting opportunities. Drop a line
              and I’ll get back within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/10 hover:bg-white/10"
              >
                <Mail size={18} /> hello@example.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/10 hover:bg-white/10"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/10 hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4"
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-400"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows={4}
                required
                className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-400"
                placeholder="Tell me about your project"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 text-white hover:brightness-110"
            >
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
