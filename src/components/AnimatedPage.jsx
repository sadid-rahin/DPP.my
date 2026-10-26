import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -24, filter: 'blur(6px)' },
};

export default function AnimatedPage({ children, className = '' }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Fades and lifts its children in when they scroll into view.
export function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
