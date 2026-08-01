import { useMemo } from 'react';
import { motion } from 'framer-motion';

// A deterministic pseudo-random node graph that stands in for "nodes reaching
// consensus" — the visual thesis of the whole dashboard. Pure SVG, no deps.
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function NetworkField({ nodeCount = 26 }) {
  const { nodes, edges } = useMemo(() => {
    const rand = seededRandom(42);
    const pts = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: rand() * 1000,
      y: rand() * 360,
      r: 2 + rand() * 2.5,
      delay: rand() * 4,
    }));
    const links = [];
    pts.forEach((p, i) => {
      const nearest = [...pts]
        .filter((q) => q.id !== p.id)
        .sort((a, b) => (a.x - p.x) ** 2 + (a.y - p.y) ** 2 - ((b.x - p.x) ** 2 + (b.y - p.y) ** 2))
        .slice(0, 2);
      nearest.forEach((n) => {
        const key = [p.id, n.id].sort().join('-');
        if (!links.find((l) => l.key === key)) {
          links.push({ key, x1: p.x, y1: p.y, x2: n.x, y2: n.y, delay: (i % 6) * 0.3 });
        }
      });
    });
    return { nodes: pts, edges: links };
  }, [nodeCount]);

  return (
    <svg
      viewBox="0 0 1000 360"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ce0d2" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7c6ff0" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {edges.map((e) => (
        <motion.line
          key={e.key}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="url(#edgeGrad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.6, delay: e.delay, ease: 'easeOut' }}
        />
      ))}
      {nodes.map((n) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#4ce0d2"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3 + (n.id % 4), repeat: Infinity, delay: n.delay, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}
