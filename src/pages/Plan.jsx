// src/pages/Plan.jsx
import AnimatedPage, { Reveal } from "../components/AnimatedPage";
import SectionHeading from "../components/SectionHeading";
import { Check, Zap, Sparkles, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Plan() {
  return (
    <AnimatedPage>
      <SectionHeading accent="Subscriptions" className="mb-4">
        SaaS
      </SectionHeading>
      <p className="text-center text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-16 px-4">
        Scalable cryptographic protection and automated monetization tiers tailored for every stage of creative production.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-lg lg:max-w-6xl mx-auto">
        {/* Tier 1: Free ($0/mo) */}
        <Reveal delay={0} className="h-full">
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative h-full flex flex-col justify-between overflow-hidden bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-accent/60 hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.35)] transition-[border-color,box-shadow] duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
                  Starter
                </span>
                <Sparkles size={20} className="text-slate-400" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Free</h3>
              <p className="text-sm text-slate-400 mb-6">For independent creators.</p>

              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$0</span>
                <span className="text-sm text-slate-400 font-normal">/mo</span>
              </div>

              <ul className="space-y-3.5 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-accent shrink-0" />
                  <span>Limited uploads</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-accent shrink-0" />
                  <span>Standard KYC</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={18} className="text-accent shrink-0" />
                  <span>Basic AI checks</span>
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl border border-accent/60 text-accent font-semibold hover:bg-accent hover:text-slate-950 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transition-all duration-300"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </Reveal>

        {/* Tier 2: Pro ($49/mo) - "Most Popular" highlighted tier */}
        <div className="lg:-translate-y-4 h-full">
          <Reveal delay={0.12} className="h-full">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-full flex flex-col justify-between overflow-hidden bg-slate-950/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-accent shadow-[0_0_40px_rgba(45,212,191,0.25)] hover:shadow-[0_0_60px_rgba(45,212,191,0.4)] transition-[border-color,box-shadow] duration-300"
            >
              {/* Top accent highlight line */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider bg-accent text-slate-950 shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                    MOST POPULAR
                  </span>
                  <Zap size={22} className="text-accent" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Pro</h3>
                <p className="text-sm text-slate-400 mb-6">For high-volume professionals.</p>

                <div className="mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">$49</span>
                  <span className="text-sm text-slate-400 font-normal">/mo</span>
                </div>

                <ul className="space-y-3.5 mb-8 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>Unlimited minting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>Priority Layer-2 routing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>0% commission</span>
                  </li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden w-full py-3.5 rounded-xl bg-accent text-slate-950 font-bold hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] transition-all duration-300"
              >
                <span className="absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md animate-shine pointer-events-none" />
                <span className="relative z-10">Start Pro Plan</span>
              </motion.button>
            </motion.div>
          </Reveal>
        </div>

        {/* Tier 3: Enterprise (Custom pricing) - Highlight in Gold */}
        <Reveal delay={0.24} className="h-full">
          <div className="relative group h-full">
            {/* Spinning gold gradient halo */}
            <div className="absolute -inset-[2px] rounded-[24px] sm:rounded-[26px] overflow-hidden">
              <div className="absolute -inset-[60%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,#fbbf24_90deg,transparent_180deg,#fde68a_270deg,transparent_360deg)]" />
            </div>
            <div className="absolute -inset-4 rounded-[32px] sm:rounded-[36px] bg-gold/20 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-full flex flex-col justify-between bg-slate-950/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gold/40 hover:border-gold transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wider bg-gold text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                    ENTERPRISE
                  </span>
                  <Building2 size={22} className="text-gold" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-gold mb-1">Enterprise</h3>
                <p className="text-sm text-slate-400 mb-6">For agencies & studios.</p>

                <div className="mb-8">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Custom</span>
                  <span className="text-sm text-slate-400 font-normal"> pricing</span>
                </div>

                <ul className="space-y-3.5 mb-8 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-gold shrink-0" />
                    <span>Metered API access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-gold shrink-0" />
                    <span>CI/CD pipeline integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={18} className="text-gold shrink-0" />
                    <span>Dedicated team accounts</span>
                  </li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden w-full py-3.5 rounded-xl bg-gold text-slate-950 font-bold hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300"
              >
                <span className="absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md animate-shine pointer-events-none" />
                <span className="relative z-10">Contact Enterprise Sales</span>
              </motion.button>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </AnimatedPage>
  );
}
