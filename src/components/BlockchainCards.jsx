import { motion } from 'framer-motion';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';

export default function BlockchainCards() {
  const { relatedBlockchains, selected } = useAlgorithm();

  if (relatedBlockchains.length === 0) {
    return (
      <div className="panel p-8 text-center text-sm text-mist-400">
        No mapped blockchains for {selected.name} yet — add one to{' '}
        <code className="font-mono text-mist-300">blockchains.json</code>.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {relatedBlockchains.map((b, i) => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          whileHover={{ y: -3, borderColor: 'rgba(76,224,210,0.35)' }}
          className="panel p-5"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-display text-base text-mist-100">{b.name}</h4>
            <span className="chip font-mono">{b.cryptocurrency}</span>
          </div>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-mist-400">Smart contracts</dt>
              <dd className="text-right text-mist-200">{b.smartContractLanguage}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-mist-400">Layer</dt>
              <dd className="text-mist-200">{b.layer}</dd>
            </div>
          </dl>
          <p className="mt-3 border-t border-white/[0.06] pt-3 text-xs leading-relaxed text-mist-400">
            {b.reason}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
