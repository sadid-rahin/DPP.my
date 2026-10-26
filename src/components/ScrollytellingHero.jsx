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
  // Responsive transform offsets keeping actors inside bounds
  const femaleX = useTransform(scrollYProgress, [0.0, 0.4, 1.0], ["78vw", "52vw", "52vw"]);
  const maleX = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], ["48vw", "48vw", "16vw", "16vw"]);
  const envelopeX = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.9, 1], ["78vw", "52vw", "48vw", "16vw", "8vw"]);
  const envelopeOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  // Thin progress bar along the top of the stage
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[220vh] sm:h-[260vh] md:h-[300vh] border-t border-white/10 overflow-hidden">
      <div className="sticky top-0 w-full h-screen overflow-hidden">

        {/* Background glow (matches the Aurora backdrop) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[350px] sm:h-[500px] md:h-[600px] bg-accent/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 left-[20%] w-[260px] sm:w-[350px] md:w-[420px] h-[260px] sm:h-[350px] md:h-[420px] bg-blue-500/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Progress bar */}
        <motion.div
          style={{ scaleX: progressScale, originX: 0 }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-400 shadow-[0_0_20px_rgba(45,212,191,0.6)] z-30"
        />

        {/* Ground Line */}
        <div className="absolute bottom-0 w-full h-[14vh] sm:h-[17vh] md:h-[20vh] min-h-[80px] bg-gradient-to-b from-white/[0.05] to-ink/80 backdrop-blur-xl border-t border-white/10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        </div>

        {/* VAULT (Blockchain Node) */}
        <div className="absolute bottom-[12vh] sm:bottom-[15vh] md:bottom-[18vh] left-[8vw] sm:left-[7vw] md:left-[6vw] -translate-x-1/2 flex flex-col items-center">
          <div className="relative w-[130px] sm:w-[190px] md:w-[250px] h-[130px] sm:h-[190px] md:h-[250px] flex items-center justify-center -mb-4 sm:-mb-6 md:-mb-8">
            <div className="absolute -inset-2 sm:-inset-3 rounded-2xl sm:rounded-3xl border border-accent/20 animate-pulse-slow pointer-events-none" />
            
            {/* Updated path for Vault MP4 Video */}
            <video 
              src={`${import.meta.env.BASE_URL}assets/vault.webm`}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain pointer-events-none"
            />

          </div>
          <span className="mt-2 sm:mt-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs z-10">Smart Vault</span>
        </div>

        {/* MALE ACTOR (Client) */}
        <motion.div style={{ x: maleX }} className="absolute bottom-[12vh] sm:bottom-[15vh] md:bottom-[18vh] left-0 z-10">
          <div className="-translate-x-1/2 flex flex-col items-center">
            
            {/* Responsive container for Male WebM Video */}
            <div className="w-[110px] sm:w-[150px] md:w-[180px] h-[170px] sm:h-[230px] md:h-[300px] -mb-6 sm:-mb-8 md:-mb-10 flex justify-center items-end">
              <video 
                src={`${import.meta.env.BASE_URL}assets/male.webm`}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full scale-x-[-1] object-contain pointer-events-none"
              />
            </div>

            <span className="mt-2 sm:mt-4 text-slate-300 font-semibold text-[10px] sm:text-xs uppercase tracking-wider bg-slate-900/60 px-2 py-0.5 sm:py-1 rounded backdrop-blur-sm">Client</span>
          </div>
        </motion.div>

        {/* FEMALE ACTOR (Creator) */}
        <motion.div style={{ x: femaleX }} className="absolute bottom-[12vh] sm:bottom-[15vh] md:bottom-[18vh] left-0 z-10">
          <div className="-translate-x-1/2 flex flex-col items-center">
            
            {/* Responsive container for Female WebM Video */}
            <div className="w-[230px] sm:w-[340px] md:w-[460px] h-[170px] sm:h-[230px] md:h-[300px] -mb-6 sm:-mb-8 md:-mb-10 flex justify-center items-end">
              <video 
                src={`${import.meta.env.BASE_URL}assets/female.webm`}
                autoPlay 
                loop 
                muted 
                playsInline
                /* scale-x-[-1] is applied here so she faces left towards the center */
                className="w-full h-full object-contain pointer-events-none scale-x-[-1]"
              />
            </div>

            <span className="mt-2 sm:mt-4 text-accent font-semibold text-[10px] sm:text-xs uppercase tracking-wider bg-slate-900/60 px-2 py-0.5 sm:py-1 rounded backdrop-blur-sm">Creator</span>
          </div>
        </motion.div>

        {/* ENVELOPE (The IP Asset) */}
        <motion.div style={{ x: envelopeX, opacity: envelopeOpacity }} className="absolute bottom-[23vh] sm:bottom-[27vh] md:bottom-[33vh] left-0 z-20">
          <div className="-translate-x-1/2">
            <div className="animate-float">
              <div className="relative w-6 sm:w-8 h-4 sm:h-6 bg-gold border border-yellow-500 shadow-[0_0_24px_rgba(251,191,36,0.7)] flex items-center justify-center rounded-sm">
                <div className="w-0 h-0 border-l-[11px] sm:border-l-[14px] border-r-[11px] sm:border-r-[14px] border-t-[9px] sm:border-t-[12px] border-l-transparent border-r-transparent border-t-yellow-600/50 absolute top-0" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Instruction */}
        <div className="absolute top-12 sm:top-16 md:top-20 w-full flex justify-center animate-pulse pointer-events-none z-40">
          <p className="text-accent font-medium uppercase tracking-widest text-xs sm:text-sm flex flex-col items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-xl">
            Scroll to see IP Transfer
            <span className="mt-1 sm:mt-1.5 text-lg sm:text-xl">↓</span>
          </p>
        </div>
      </div>
    </div>
  );
}