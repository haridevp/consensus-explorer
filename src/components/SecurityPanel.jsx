import { motion } from 'framer-motion';
import { FiShield, FiEyeOff, FiActivity, FiFlag } from 'react-icons/fi';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';

export default function SecurityPanel() {
  const { selected } = useAlgorithm();
  const s = selected.security;

  const cards = [
    { icon: FiShield, label: '51% Attack Resistance', value: s.attack51 },
    { icon: FiEyeOff, label: 'Sybil Resistance', value: s.sybilResistance },
    { icon: FiActivity, label: 'Fault Tolerance', value: s.faultTolerance },
    { icon: FiFlag, label: 'Consensus Finality', value: s.finalityType },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((c, i) => (
        <motion.div
          key={c.label + selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="panel p-5"
        >
          <c.icon className="mb-3 text-signal-violet" size={18} />
          <p className="text-xs text-mist-400">{c.label}</p>
          <p className="mt-1.5 text-sm leading-snug text-mist-100">{c.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
