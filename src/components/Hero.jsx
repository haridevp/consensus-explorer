import { motion } from 'framer-motion';
import NetworkField from './NetworkField.jsx';
import SearchBar from './SearchBar.jsx';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';

export default function Hero() {
  const { algorithms } = useAlgorithm();

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-grid-fade">
      <div className="absolute inset-0">
        <NetworkField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/40 to-ink-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          {algorithms.length} algorithms · one comparative model
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-mist-100 md:text-6xl"
        >
          Consensus algorithms,{' '}
          <span className="bg-gradient-to-r from-signal-cyan to-signal-violet bg-clip-text text-transparent">
            side by side.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-xl text-base text-mist-300 md:text-lg"
        >
          Every blockchain agrees on truth differently. Pick a mechanism to see how it trades off
          security, scalability, and decentralization — with the real chains that run on it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
}
