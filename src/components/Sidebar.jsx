import { motion } from 'framer-motion';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';
import { useAlgorithmIcon } from '../hooks/useAlgorithmIcon.js';

function SidebarRow({ algorithm, isActive, onSelect }) {
  const Icon = useAlgorithmIcon(algorithm.icon);

  return (
    <button
      onClick={onSelect}
      className="relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors group"
    >
      {isActive && (
        <motion.span
          layoutId="sidebar-active"
          className="absolute inset-0 rounded-xl border border-signal-cyan/30 bg-signal-cyan/[0.08] shadow-glow"
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        />
      )}
      <span
        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
          isActive
            ? 'border-signal-cyan/40 bg-signal-cyan/10 text-signal-cyan'
            : 'border-white/[0.06] bg-white/[0.03] text-mist-400 group-hover:text-mist-200'
        }`}
      >
        <Icon size={14} />
      </span>
      <span className="relative z-10 min-w-0">
        <span className={`block truncate text-sm ${isActive ? 'text-mist-100' : 'text-mist-300 group-hover:text-mist-100'}`}>
          {algorithm.shortName}
        </span>
      </span>
    </button>
  );
}

export default function Sidebar() {
  const { filteredAlgorithms, selectedId, setSelectedId } = useAlgorithm();

  return (
    <aside className="panel sticky top-6 h-fit max-h-[calc(100vh-3rem)] w-full shrink-0 overflow-y-auto p-3 md:w-64">
      <p className="eyebrow px-3 pb-2 pt-1">Algorithms</p>
      <nav className="flex flex-col gap-1">
        {filteredAlgorithms.map((algorithm) => (
          <SidebarRow
            key={algorithm.id}
            algorithm={algorithm}
            isActive={algorithm.id === selectedId}
            onSelect={() => setSelectedId(algorithm.id)}
          />
        ))}
        {filteredAlgorithms.length === 0 && (
          <p className="px-3 py-4 text-sm text-mist-400">No matches.</p>
        )}
      </nav>
    </aside>
  );
}
