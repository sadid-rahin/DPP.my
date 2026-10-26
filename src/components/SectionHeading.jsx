import { motion } from 'framer-motion';

// Page title: plain words followed by a shimmering accent word.
export default function SectionHeading({ children, accent, align = 'center', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
      >
        {children}{' '}
        <span className="bg-gradient-to-r from-accent via-sky-300 to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shimmer">
          {accent}
        </span>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: align === 'center' ? 0.5 : 0 }}
        className={`mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-accent to-blue-400 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
