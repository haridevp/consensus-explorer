import { motion } from 'framer-motion';
import { FiZap, FiClock, FiCheckCircle, FiBattery, FiUsers } from 'react-icons/fi';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';

function formatDuration(seconds) {
  if (seconds < 1) return `${Math.round(seconds * 1000)}ms`;
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
  return `${Math.round(seconds / 3600)}h`;
}

export default function MetricsCards() {
  const { selected } = useAlgorithm();
  const m = selected.metrics;

  const cards = [
    { icon: FiZap, label: 'Throughput', value: `${m.tps.toLocaleString()}`, unit: 'TPS' },
    { icon: FiClock, label: 'Block Creation Time', value: formatDuration(m.blockTimeSec), unit: '' },
    { icon: FiCheckCircle, label: 'Finality', value: formatDuration(m.finalitySec), unit: '' },
    { icon: FiBattery, label: 'Energy Consumption', value: m.energy, unit: '' },
    { icon: FiUsers, label: 'Validator Count', value: m.validatorCount, unit: '' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {cards.map((c, i) => (
        <motion.div
          key={c.label + selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          whileHover={{ y: -3 }}
          className="panel p-5"
        >
          <c.icon className="mb-3 text-signal-cyan" size={18} />
          <p className="text-xs text-mist-400">{c.label}</p>
          <p className="stat-value mt-1 leading-tight">
            {c.value}
            {c.unit && <span className="ml-1 text-sm text-mist-400">{c.unit}</span>}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
