// src/pages/ProblemSolution.jsx
import AnimatedPage, { Reveal } from "../components/AnimatedPage";
import SectionHeading from "../components/SectionHeading";
import { XCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemSolution() {
  const data = [
    {
      problemTitle: "High Barriers & Bureaucracy",
      problemBadge: "Slow & Expensive",
      problemDesc:
        "Traditional copyright filing is painfully slow and prohibitively expensive, leaving independent creators vulnerable for months during backlogged registration processes.",
      solutionTitle: "Decentralized Notary",
      solutionBadge: "Instant Layer-2 EVM",
      solutionDesc:
        "Near-instantaneous, low-cost Layer-2 registration. Generates immutable cryptographic certificates of ownership anchored to EVM blockchain ledgers within seconds.",
    },
    {
      problemTitle: "Plagiarism Enforcement",
      problemBadge: "Rampant Infringement",
      problemDesc:
        "Content theft and stolen media propagation spread faster than DMCA takedowns can react, with creators struggling to provide verifiable timestamps of prior art.",
      solutionTitle: "AI Fingerprinting",
      solutionBadge: "Automated Verification",
      solutionDesc:
        "Deep vector scans prevent stolen goods from being registered, while immutable blockchain timestamps provide courtroom-grade provenance records.",
    },
    {
      problemTitle: "Monetization Friction",
      problemBadge: "Complex Legal Contracts",
      problemDesc:
        "Opaque licensing agreements, delayed wire transfers, and heavy broker commissions drain creator revenues and stall commercial collaboration.",
      solutionTitle: "Automated Licensing",
      solutionBadge: "OpenZeppelin-Audited",
      solutionDesc:
        "OpenZeppelin-audited smart contracts automatically execute programmable usage rights, instant royalty splits, and friction-free Stripe fiat payouts.",
    },
  ];

  return (
    <AnimatedPage>
      <SectionHeading accent="Legal Gap" className="mb-4">
        Bridging the
      </SectionHeading>
      <p className="text-center text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-14 px-4">
        Transforming traditional, slow intellectual property enforcement into transparent cryptographic guarantees.
      </p>

      <div className="space-y-6 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative flex flex-col md:flex-row gap-4 sm:gap-5 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)] transition-[border-color,box-shadow] duration-300"
            >
              {/* Problem Container */}
              <div className="flex-1 flex flex-col justify-between text-red-300 bg-gradient-to-br from-red-500/15 to-red-500/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-red-500/20">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                      PAIN POINT
                    </span>
                    <span className="text-xs text-red-400/80 font-medium">
                      {item.problemBadge}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <XCircle className="shrink-0 mt-0.5 text-red-400" size={22} />
                    <h3 className="text-lg sm:text-xl font-bold text-red-200 tracking-tight">
                      {item.problemTitle}
                    </h3>
                  </div>

                  <p className="mt-2.5 sm:mt-3 text-red-200/80 text-xs sm:text-sm leading-relaxed pl-0 sm:pl-8">
                    {item.problemDesc}
                  </p>
                </div>
              </div>

              {/* Mobile Indicator */}
              <div className="flex md:hidden items-center justify-center -my-2 z-10">
                <span className="w-8 h-8 rounded-full bg-slate-950 border border-accent/40 flex items-center justify-center text-accent text-sm shadow-[0_0_15px_rgba(45,212,191,0.25)]">
                  ↓
                </span>
              </div>

              {/* Desktop Arrow badge between the two halves */}
              <div className="hidden md:flex items-center justify-center -mx-9 z-10">
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full bg-slate-950 border border-accent/40 flex items-center justify-center text-accent text-base shadow-[0_0_20px_rgba(45,212,191,0.25)]"
                >
                  →
                </motion.span>
              </div>

              {/* Solution Container */}
              <div className="flex-1 flex flex-col justify-between text-teal-100 bg-gradient-to-br from-accent/15 to-accent/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-accent/25">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/40">
                      DPP SOLUTION
                    </span>
                    <span className="text-xs text-accent font-medium">
                      {item.solutionBadge}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <CheckCircle2 className="shrink-0 mt-0.5 text-accent" size={22} />
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.solutionTitle}
                    </h3>
                  </div>

                  <p className="mt-2.5 sm:mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed pl-0 sm:pl-8">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </AnimatedPage>
  );
}
