// src/components/ScrollytellingHero.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollytellingHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

 // Animations (0.0 to 1.0 scroll progress)
  // Changed 85vw -> 95vw (pushes female closer to the right edge)
  const femaleX = useTransform(scrollYProgress, [0.0, 0.4, 1.0], ["85vw", "55vw", "55vw"]);
  
  // Changed 15vw -> 10vw (pushes male closer to the left edge at the end)
  const maleX = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], ["45vw", "50vw", "10vw", "10vw"]);
  
  // Updated envelope to match the new female start (95vw) and vault end (5vw)
  const envelopeX = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.9, 1], ["85vw", "55vw", "50vw", "10vw", "5vw"]);
  const envelopeOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  // Thin progress bar along the top of the stage
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="absolute w-full top-[50vh] h-[300vh] border-t border-white/10">
      <div className="sticky top-0 w-full h-screen ">

        {/* Background glow (matches the Aurora backdrop) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 left-[20%] w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Progress bar */}
        <motion.div
          style={{ scaleX: progressScale, originX: 0 }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-400 shadow-[0_0_20px_rgba(45,212,191,0.6)] z-30"
        />

        {/* Ground Line */}
        <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-b from-white/[0.05] to-ink/80 backdrop-blur-xl border-t border-white/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        </div>

        {/* VAULT (Blockchain Node) */}
        <div className="absolute bottom-[18vh] left-[5vw] -translate-x-1/2 flex flex-col items-center">
          <div className="relative w-[250px] h-[250px] flex items-center justify-center -mb-8">
            <div className="absolute -inset-3 rounded-3xl border border-accent/20 animate-pulse-slow pointer-events-none" />
            
            {/* Replaced 3D iframe with Vault MP4 Video */}
            <video 
              src="/public/assets/vault.webm" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain pointer-events-none"
            />

          </div>
          <span className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-xs z-10">Smart Vault</span>
        </div>

        {/* MALE ACTOR (Client) */}
        <motion.div style={{ x: maleX }} className="absolute bottom-[18vh] left-0 z-10">
          <div className="-translate-x-1/2 flex flex-col items-center">
            
            {/* Replaced 3D iframe with Male MP4 Video */}
            <div className="w-[180px] h-[300px] -mb-10 flex justify-center items-end">
              <video 
                src="/public/assets/male.webm" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full scale-x-[-1] object-contain pointer-events-none"
              />
            </div>

            <span className="mt-4 text-slate-300 font-semibold text-xs uppercase tracking-wider bg-slate-900/50 px-2 py-1 rounded backdrop-blur-sm">Client</span>
          </div>
        </motion.div>

        {/* FEMALE ACTOR (Creator) */}
        <motion.div style={{ x: femaleX }} className="absolute bottom-[18vh] left-0 z-10">
          <div className="-translate-x-1/2 flex flex-col items-center">
            
            {/* Replaced 3D iframe with Female MP4 Video */}
            <div className="w-[480px] h-[300px] -mb-10 flex justify-center items-end">
              <video 
                src="/public/assets/female.webm" 
                autoPlay 
                loop 
                muted 
                playsInline
                /* scale-x-[-1] is applied here so she faces left towards the center */
                className="w-full h-full object-contain pointer-events-none scale-x-[-1]"
              />
            </div>

            <span className="mt-4 text-accent font-semibold text-xs uppercase tracking-wider bg-slate-900/50 px-2 py-1 rounded backdrop-blur-sm">Creator</span>
          </div>
        </motion.div>

        {/* ENVELOPE (The IP Asset) */}
        <motion.div style={{ x: envelopeX, opacity: envelopeOpacity }} className="absolute bottom-[33vh] left-0 z-20">
          <div className="-translate-x-1/2">
            <div className="animate-float">
              <div className="relative w-8 h-6 bg-gold border border-yellow-500 shadow-[0_0_24px_rgba(251,191,36,0.7)] flex items-center justify-center rounded-sm">
                <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-t-[12px] border-l-transparent border-r-transparent border-t-yellow-600/50 absolute top-0" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Instruction */}
        <div className="absolute top-50 opacity-10 w-full flex justify-center opacity-80 animate-pulse pointer-events-none z-40">
          <p className="text-accent font-medium uppercase tracking-widest text-sm flex flex-col items-center px-5 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-xl">
            Scroll to see IP Transfer
            <span className="mt-2 text-2xl">↓</span>
          </p>
        </div>
      </div>
    </div>
  );
}