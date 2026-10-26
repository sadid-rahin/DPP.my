import AnimatedPage, { Reveal } from "../components/AnimatedPage";
import SectionHeading from "../components/SectionHeading";
import { Code, PenTool, Smartphone, Music, FileBadge, LockKeyhole, Hexagon, ScrollText } from "lucide-react";
import { motion } from "framer-motion";

export default function Product() {
  const products = [
    { title: "Brand Logos", icon: <PenTool size={36}/>, desc: "Custom brand identity and scalable vector graphics." },
    { title: "Websites", icon: <Code size={36}/>, desc: "High-performance, animated, and responsive web platforms." },
    { title: "Patente", icon: <FileBadge size={36}/>, desc: "An official legal right granted by a sovereign authority that gives an inventor the exclusive right to stop others from making, using, selling, or importing an invention for a limited time." },
    { title: "Trade Secret", icon: <LockKeyhole size={36}/>, desc: "A type of intellectual property (IP) that protects confidential business, technical, or commercial information giving a company a competitive edge." },
    { title: "NFT", icon: <Hexagon size={36}/>, desc: "An NFT (non-fungible token) is a unique digital certificate." },
    { title: "Script", icon: <ScrollText size={36}/>, desc: "A written text or a set of instructions used in entertainment, computing, or writing" },
    { title: "Mobile Apps", icon: <Smartphone size={36}/>, desc: "Native and cross-platform applications." },
    { title: "Song Lyrics", icon: <Music size={36}/>, desc: "Ghostwriting and premium lyrical compositions." }
  ];

  return (
    <AnimatedPage>
      <SectionHeading accent="Products" className="mb-10 sm:mb-14">Our</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
        {products.map((item, i) => (
          <Reveal key={i} delay={(i % 2) * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative h-full overflow-hidden bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-accent/60 hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.35)] transition-[border-color,box-shadow] duration-300 cursor-pointer group"
            >
              {/* Hover glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <span className="absolute top-4 right-6 sm:top-6 sm:right-8 text-5xl sm:text-6xl font-black text-white/[0.04] select-none group-hover:text-accent/10 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/10 border border-accent/20 text-accent mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </AnimatedPage>
  );
}
