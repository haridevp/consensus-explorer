import { FiSearch, FiX } from 'react-icons/fi';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';

export default function SearchBar() {
  const { query, setQuery, filteredAlgorithms, setSelectedId } = useAlgorithm();

  return (
    <div className="relative w-full max-w-md">
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mist-400" size={16} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search consensus algorithms…"
        aria-label="Search consensus algorithms"
        className="w-full rounded-full border border-white/[0.08] bg-white/[0.04] py-3 pl-11 pr-10 text-sm text-mist-100 placeholder:text-mist-400 outline-none transition focus:border-signal-cyan/50 focus:bg-white/[0.06]"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-mist-400 hover:text-mist-100"
        >
          <FiX size={16} />
        </button>
      )}
      {query && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/[0.08] bg-ink-800 shadow-panel">
          {filteredAlgorithms.length === 0 && (
            <p className="px-4 py-3 text-sm text-mist-400">No algorithms match “{query}”.</p>
          )}
          {filteredAlgorithms.slice(0, 6).map((a) => (
            <button
              key={a.id}
              onClick={() => {
                setSelectedId(a.id);
                setQuery('');
              }}
              className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-mist-200 hover:bg-white/[0.05]"
            >
              <span>{a.name}</span>
              <span className="font-mono text-xs text-mist-400">{a.shortName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
