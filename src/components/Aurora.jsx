import { motion } from 'framer-motion';

// Fixed animated backdrop shared by every page. Rendered once from Navbar.
export default function Aurora() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-ink">
      <motion.div
        className="absolute -top-40 -left-32 w-[640px] h-[640px] rounded-full bg-accent/25 blur-[140px]"
        animate={{ x: [0, 120, 0], y: [0, 80, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-blue-500/20 blur-[140px]"
        animate={{ x: [0, -140, 0], y: [0, 100, 0], scale: [1.1, 0.95, 1.1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/3 w-[520px] h-[520px] rounded-full bg-violet-600/20 blur-[140px]"
        animate={{ x: [0, 90, -60, 0], y: [0, -70, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-[320px] h-[320px] rounded-full bg-gold/10 blur-[120px]"
        animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Fine grid, faded toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/60" />
    </div>
  );
}
