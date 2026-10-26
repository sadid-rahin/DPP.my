// src/pages/Service.jsx
import AnimatedPage, { Reveal } from "../components/AnimatedPage";
import SectionHeading from "../components/SectionHeading";
import { Fingerprint, UserCheck, Cpu, Blocks, FileSignature } from "lucide-react";
import { motion } from "framer-motion";

export default function Service() {
  const pipeline = [
    {
      step: "01",
      title: "Secure Upload",
      subtitle: "Digital Fingerprinting",
      desc: "Generate SHA-256 digital fingerprint",
      icon: <Fingerprint size={34} />,
    },
    {
      step: "02",
      title: "Verify Identity",
      subtitle: "Biometric KYC",
      desc: "Biometric KYC verification ensures verifiable authenticity and legal accountability for creator profiles.",
      icon: <UserCheck size={34} />,
    },
    {
      step: "03",
      title: "AI Similarity Check",
      subtitle: "Global Registry Scan",
      desc: "Vector search against global registries to prevent unauthorized infringement before on-chain minting.",
      icon: <Cpu size={34} />,
    },
    {
      step: "04",
      title: "Mint Ownership",
      subtitle: "Layer-2 EVM Token",
      desc: "Issue immutable ERC-721 token on Layer-2 EVM with cryptographic proof of prior art and timestamping.",
      icon: <Blocks size={34} />,
    },
    {
      step: "05",
      title: "Automate Licensing",
      subtitle: "Smart Contracts & Payouts",
      desc: "Deploy smart contracts for usage rights and Stripe payouts with instant fractional monetization.",
      icon: <FileSignature size={34} />,
    },
  ];

  return (
    <AnimatedPage>
      <SectionHeading accent="Ecosystem" className="mb-4">
        The 5-Step
      </SectionHeading>
      <p className="text-center text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-14">
        Our end-to-end cryptographic pipeline from raw asset upload to automated revenue distribution.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pipeline.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-full overflow-hidden bg-white/[0.04] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-accent/60 hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.35)] transition-[border-color,box-shadow] duration-300 group flex flex-col justify-between"
            >
              {/* Top highlight bar */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Radial glow blob */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Header row: Step pill & spinning icon container */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-accent/10 border border-accent/30 text-accent">
                    STEP {step.step}
                  </span>

                  <div className="relative w-16 h-16">
                    <span className="absolute inset-0 rounded-full border border-dashed border-accent/40 animate-spin-slow" />
                    <div className="absolute inset-1.5 flex items-center justify-center rounded-full bg-slate-900/90 text-accent group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(45,212,191,0.4)] transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  {step.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span>Phase {step.step} of 05</span>
                <span className="text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Protected & Verified →
                </span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </AnimatedPage>
  );
}
