import { FiGithub } from 'react-icons/fi';

const STACK = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'React Icons'];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-sm text-mist-200">Consensus Algorithms Explorer</p>
          <p className="mt-1 text-xs text-mist-400">
            Built as a comparative educational reference. Data is illustrative and simplified for clarity.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {STACK.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>

        <a
          href="https://github.com/haridevp/consensus-explorer"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 text-xs text-mist-300 transition hover:border-signal-cyan/40 hover:text-signal-cyan"
        >
          <FiGithub size={14} /> View on GitHub
        </a>
      </div>
    </footer>
  );
}
