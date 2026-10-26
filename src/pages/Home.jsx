// src/pages/Home.jsx
import AnimatedPage from "../components/AnimatedPage";
import ScrollytellingHero from "../components/ScrollytellingHero";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <AnimatedPage>
      {/* 1. The Main Text Hero (min-h-[80vh]) */}
      <div className="absolute z-10 w-full flex flex-col items-center justify-center min-h-[80vh] text-center px-4">

        {/* Decorative orbiting rings */}
        <motion.div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] md:w-[760px] md:h-[760px] rounded-full border border-white/[0.06] pointer-events-none -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_6px_rgba(45,212,191,0.6)]" />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.08] pointer-events-none -z-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute bottom-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold shadow-[0_0_20px_5px_rgba(251,191,36,0.55)]" />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-sm text-accent mb-4 shadow-[0_0_30px_rgba(45,212,191,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <Shield size={16} /> DIGITAL PROPERTY PROTECTION
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 drop-shadow-sm pb-2"
          >
            Revolutionizing IP Protection for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-300 to-blue-400 bg-[length:200%_auto] animate-text-shimmer">Creator Economy</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Empowering creators to seamlessly register, verify, and monetize intellectual property. Powered by AI, Layer-2 Blockchain, Smart Contracts, and Digital Identity Verification.
          </motion.p>

          <motion.div variants={item} className="pt-6 flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="group relative inline-flex items-center justify-center gap-3 bg-accent text-slate-950 px-10 py-4 rounded-full font-semibold text-lg overflow-hidden shadow-[0_0_30px_rgba(45,212,191,0.35)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(45,212,191,0.6)]"
              >
                <span className="absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md animate-shine pointer-events-none" />
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10">See How It Works</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 2. The Interactive Scroll Scene (300vh) */}
      <div className="w-full mt-10">
        <ScrollytellingHero />
      </div>

    </AnimatedPage>
  );
}