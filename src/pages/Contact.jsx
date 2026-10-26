import AnimatedPage from "../components/AnimatedPage";
import SectionHeading from "../components/SectionHeading";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../api"; // Import your local API

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Call your simulated backend function
    const response = await submitContactForm(formData);

    if (response.success) {
      setStatus(response.message);
      setFormData({ name: '', email: '', message: '' }); // Clear form

      // Clear success message after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const inputClass =
    "bg-slate-950/60 p-3 sm:p-3.5 rounded-xl border border-white/10 placeholder:text-slate-500 focus:border-accent focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)] outline-none text-white text-sm sm:text-base transition";

  return (
    <AnimatedPage>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 mt-6 sm:mt-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 space-y-5 sm:space-y-6"
        >
          <SectionHeading accent="Touch" align="left">Get In</SectionHeading>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">Ready to start your next big project? Reach out to our team.</p>
          <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
            {[
              { icon: <Mail className="text-accent" size={20}/>, text: "sadidrahin.tzyu@gmail.com", isBreak: true },
              { icon: <Phone className="text-accent" size={20}/>, text: "+880 17380-0783" },
              { icon: <MapPin className="text-accent" size={20}/>, text: "The Place, Cyberjaya" },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3.5 sm:gap-4 text-slate-300 bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-accent/50 rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base transition-colors"
              >
                <span className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">{row.icon}</span>
                <span className={row.isBreak ? "break-all" : ""}>{row.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="relative flex-1 bg-white/[0.05] backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col space-y-4 border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <input
            type="text" name="name" value={formData.name} onChange={handleChange} required
            placeholder="Name" className={inputClass}
          />
          <input
            type="email" name="email" value={formData.email} onChange={handleChange} required
            placeholder="Email" className={inputClass}
          />
          <textarea
            name="message" value={formData.message} onChange={handleChange} required
            placeholder="Message" rows="5" className={`${inputClass} resize-none`}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="relative overflow-hidden bg-gradient-to-r from-accent to-sky-400 text-slate-950 font-bold py-3 sm:py-3.5 rounded-xl mt-2 hover:shadow-[0_0_30px_rgba(45,212,191,0.45)] transition-shadow duration-300 disabled:opacity-50 text-sm sm:text-base"
          >
            <span className="absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md animate-shine pointer-events-none" />
            <span className="relative">{status === 'Sending...' ? 'Sending...' : 'Send Message'}</span>
          </motion.button>

          {status && status !== 'Sending...' && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-accent text-center font-semibold mt-2 animate-pulse"
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </AnimatedPage>
  );
}
