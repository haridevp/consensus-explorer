import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';

const DIMENSIONS = [
  { key: 'security', label: 'Security', color: '#4ce0d2' },
  { key: 'scalability', label: 'Scalability', color: '#7c6ff0' },
  { key: 'decentralization', label: 'Decentralization', color: '#f0b155' },
];

export default function TrilemmaRadar() {
  const { selected } = useAlgorithm();
  const data = DIMENSIONS.map((d) => ({ dimension: d.label, value: selected.trilemma[d.key], full: 10 }));

  return (
    <div className="panel grid gap-6 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
      <div className="h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="75%">
            <PolarGrid stroke="#242b37" />
            <PolarAngleAxis dataKey="dimension" tick={{ fill: '#a3acbc', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
            <Radar
              key={selected.id}
              name={selected.shortName}
              dataKey="value"
              stroke="#4ce0d2"
              fill="#4ce0d2"
              fillOpacity={0.28}
              strokeWidth={2}
              isAnimationActive
              animationDuration={700}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col justify-center gap-3">
        {DIMENSIONS.map((d, i) => (
          <motion.div
            key={d.key}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-mist-300">{d.label}</span>
              <span className="font-mono text-sm text-mist-100">{selected.trilemma[d.key]}/10</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: d.color }}
                initial={{ width: 0 }}
                animate={{ width: `${selected.trilemma[d.key] * 10}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
