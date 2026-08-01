import { motion } from 'framer-motion';

export default function Section({ eyebrow, title, description, children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`py-8 ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-5">
          {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
          {title && <h2 className="font-display text-xl font-medium text-mist-100 md:text-2xl">{title}</h2>}
          {description && <p className="mt-1.5 max-w-2xl text-sm text-mist-400">{description}</p>}
        </div>
      )}
      {children}
    </motion.section>
  );
}
