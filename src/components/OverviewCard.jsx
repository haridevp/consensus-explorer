import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';
import { useAlgorithmIcon } from '../hooks/useAlgorithmIcon.js';

export default function OverviewCard() {
  const { selected } = useAlgorithm();
  const Icon = useAlgorithmIcon(selected.icon);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="panel p-6 md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-signal-cyan/30 bg-signal-cyan/10 text-signal-cyan">
              <Icon size={22} />
            </span>
            <div>
              <h3 className="font-display text-2xl text-mist-100">{selected.name}</h3>
              <p className="mt-0.5 text-sm text-mist-400">{selected.tagline}</p>
            </div>
          </div>
          <span className="chip">{selected.layer}</span>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Overview</p>
            <p className="text-sm leading-relaxed text-mist-300">{selected.overview}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Core mechanism</p>
            <p className="text-sm leading-relaxed text-mist-300">{selected.mechanism}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-2 !text-signal-green">Advantages</p>
            <ul className="space-y-2">
              {selected.advantages.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-mist-300">
                  <FiCheck className="mt-0.5 shrink-0 text-signal-green" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-2 !text-signal-red">Disadvantages</p>
            <ul className="space-y-2">
              {selected.disadvantages.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-mist-300">
                  <FiX className="mt-0.5 shrink-0 text-signal-red" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <p className="eyebrow mb-4">Workflow</p>
          <ol className="relative space-y-5 border-l border-white/[0.08] pl-6">
            {selected.workflow.map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="relative text-sm text-mist-300"
              >
                <span className="absolute -left-[1.95rem] flex h-5 w-5 items-center justify-center rounded-full border border-signal-cyan/40 bg-ink-800 font-mono text-[10px] text-signal-cyan">
                  {i + 1}
                </span>
                {step}
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
