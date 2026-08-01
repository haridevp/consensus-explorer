import { createContext, useContext, useMemo, useState } from 'react';
import algorithms from '../data/algorithms.json';
import blockchains from '../data/blockchains.json';

const AlgorithmContext = createContext(null);

export function AlgorithmProvider({ children }) {
  const [selectedId, setSelectedId] = useState(algorithms[0].id);
  const [query, setQuery] = useState('');

  const selected = useMemo(
    () => algorithms.find((a) => a.id === selectedId) ?? algorithms[0],
    [selectedId]
  );

  const filteredAlgorithms = useMemo(() => {
    if (!query.trim()) return algorithms;
    const q = query.toLowerCase();
    return algorithms.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.shortName.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q)
    );
  }, [query]);

  const relatedBlockchains = useMemo(
    () => blockchains.filter((b) => b.consensusId === selectedId),
    [selectedId]
  );

  const value = {
    algorithms,
    blockchains,
    selected,
    selectedId,
    setSelectedId,
    query,
    setQuery,
    filteredAlgorithms,
    relatedBlockchains,
  };

  return <AlgorithmContext.Provider value={value}>{children}</AlgorithmContext.Provider>;
}

export function useAlgorithm() {
  const ctx = useContext(AlgorithmContext);
  if (!ctx) throw new Error('useAlgorithm must be used within an AlgorithmProvider');
  return ctx;
}
