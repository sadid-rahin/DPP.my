import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from './Aurora';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/problem-solution' },
    { name: 'Plans', path: '/plans' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <Aurora />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 inset-x-0 z-50 px-4"
      >
        <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <Link to="/" className="group flex items-center">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              DPP
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium rounded-xl transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-accent/15 border border-accent/30 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-accent hover:bg-white/5 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 p-3 space-y-1 max-h-[75vh] overflow-y-auto shadow-2xl"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? 'text-accent bg-accent/10' : 'text-slate-300 hover:text-accent hover:bg-white/5'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
