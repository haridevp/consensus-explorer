import { Fragment, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';
import compatibilityNotes from '../data/compatibility.json';

// Limits the matrix to a curated subset so it stays legible at a glance.
const FEATURED_IDS = [
  'bitcoin', 'ethereum', 'eos', 'vechain', 'hyperledger', 'cosmos',
  'avalanchec', 'solana', 'chia', 'dogecoin',
];

function buildNote(chainA, chainB, algorithms, template) {
  const consensusA = algorithms.find((a) => a.id === chainA.consensusId);
  const consensusB = algorithms.find((a) => a.id === chainB.consensusId);
  if (chainA.id === chainB.id) {
    return compatibilityNotes.selfNote.replace('{a}', chainA.name);
  }
  if (chainA.consensusId === chainB.consensusId) {
    return template.sameConsensusNote
      .replace('{a}', chainA.name)
      .replace('{b}', chainB.name)
      .replace('{consensus}', consensusA?.name ?? 'the same consensus');
  }
  return template.differentConsensusNote
    .replace('{a}', chainA.name)
    .replace('{b}', chainB.name)
    .replace('{consensusA}', consensusA?.shortName ?? '?')
    .replace('{consensusB}', consensusB?.shortName ?? '?');
}

export default function CompatibilityMatrix() {
  const { blockchains, algorithms } = useAlgorithm();
  const [hovered, setHovered] = useState(null);

  const chains = useMemo(
    () => FEATURED_IDS.map((id) => blockchains.find((b) => b.id === id)).filter(Boolean),
    [blockchains]
  );

  return (
    <div className="panel overflow-x-auto p-6 md:p-8">
      <div className="min-w-[720px]">
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: `140px repeat(${chains.length}, minmax(0, 1fr))` }}
        >
          <div />
          {chains.map((c) => (
            <div key={c.id} className="flex items-end justify-center pb-2">
              <span className="rotate-0 text-center text-[11px] font-mono text-mist-400">{c.cryptocurrency}</span>
            </div>
          ))}

          {chains.map((rowChain) => (
            <Fragment key={rowChain.id}>
              <div className="flex items-center pr-3 text-sm text-mist-300">
                {rowChain.name}
              </div>
              {chains.map((colChain) => {
                const same = rowChain.consensusId === colChain.consensusId;
                const cellKey = `${rowChain.id}:${colChain.id}`;
                return (
                  <motion.div
                    key={cellKey}
                    onMouseEnter={() => setHovered(cellKey)}
                    onMouseLeave={() => setHovered((h) => (h === cellKey ? null : h))}
                    whileHover={{ scale: 1.08 }}
                    className={`relative m-0.5 aspect-square rounded-md ${
                      same ? 'bg-signal-green/70' : 'bg-signal-red/40'
                    } cursor-pointer`}
                  >
                    {hovered === cellKey && (
                      <div className="absolute bottom-full left-1/2 z-30 mb-2 w-56 -translate-x-1/2 rounded-lg border border-white/10 bg-ink-800 p-3 text-left text-xs leading-relaxed text-mist-200 shadow-panel">
                        {buildNote(rowChain, colChain, algorithms, compatibilityNotes)}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6 text-xs text-mist-400">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-signal-green/70" /> Same consensus
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-signal-red/40" /> Different consensus
        </span>
      </div>
    </div>
  );
}
