import { motion } from 'framer-motion';
import { FiLayers } from 'react-icons/fi';

const LAYERS = [
  {
    title: 'Layer 1',
    subtitle: 'Base settlement',
    explanation:
      'The underlying blockchain that runs consensus directly — it defines its own validator set, security budget, and finality rules. Bitcoin, Ethereum, and Solana are all Layer 1s.',
    glow: 'bg-signal-cyan/10',
    icon: 'text-signal-cyan',
  },
  {
    title: 'Layer 2',
    subtitle: 'Scaling on top',
    explanation:
      'A protocol built on top of a Layer 1 that inherits its security while processing transactions off the base chain, then periodically settles a compressed summary back down.',
    glow: 'bg-signal-violet/10',
    icon: 'text-signal-violet',
  },
];

export default function LayerComparison() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {LAYERS.map((l, i) => (
        <motion.div
          key={l.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.08 }}
          className="panel relative overflow-hidden p-6"
        >
          <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${l.glow} blur-2xl`} />
          <FiLayers className={`mb-4 ${l.icon}`} size={20} />
          <h4 className="font-display text-lg text-mist-100">{l.title}</h4>
          <p className="mb-3 text-xs uppercase tracking-wide text-mist-400">{l.subtitle}</p>
          <p className="text-sm leading-relaxed text-mist-300">{l.explanation}</p>
        </motion.div>
      ))}
    </div>
  );
}
