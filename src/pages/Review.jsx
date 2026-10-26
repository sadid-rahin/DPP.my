import AnimatedPage, { Reveal } from "../components/AnimatedPage";
import SectionHeading from "../components/SectionHeading";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchReviews, submitReview } from "../api"; // Import your local API

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load reviews when the page mounts
  useEffect(() => {
    const loadReviews = async () => {
      const data = await fetchReviews();
      setReviews(data);
    };
    loadReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await submitReview(formData);

    if (response.success) {
      // Add the new review to the top of the UI list immediately
      setReviews([response.review, ...reviews]);
      setFormData({ name: '', text: '' }); // Clear form
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatedPage>
      <SectionHeading accent="Reviews" className="mb-10 sm:mb-14">Client</SectionHeading>

      {/* Dynamic Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto">
        {reviews.map((rev, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden bg-white/[0.04] backdrop-blur-xl p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-accent/60 hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.3)] transition-[border-color,box-shadow] duration-300"
          >
            <span className="absolute -top-3 sm:-top-4 right-4 sm:right-5 text-6xl sm:text-8xl font-serif text-accent/10 select-none leading-none">&ldquo;</span>
            <div className="relative flex text-gold mb-3 sm:mb-4 gap-0.5">
              {[...Array(rev.rating || 5)].map((_, i) => <Star key={i} fill="currentColor" size={16} className="sm:w-[18px] sm:h-[18px]" />)}
            </div>
            <p className="relative text-slate-300 italic text-sm sm:text-base leading-relaxed">"{rev.text}"</p>
            <p className="relative mt-4 sm:mt-5 font-bold text-accent text-sm sm:text-base">- {rev.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Review Submission Form */}
      <Reveal className="max-w-md mx-auto">
        <div className="relative bg-white/[0.05] backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4 sm:mb-5">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
            <input
              type="text" name="name" value={formData.name} onChange={handleChange} required
              placeholder="Your Name" className="bg-slate-950/60 border border-white/10 rounded-xl p-3 sm:p-3.5 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)] transition text-sm sm:text-base text-white"
            />
            <textarea
              name="text" value={formData.text} onChange={handleChange} required
              placeholder="Your Feedback" rows="4" className="bg-slate-950/60 border border-white/10 rounded-xl p-3 sm:p-3.5 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)] transition text-sm sm:text-base text-white"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" disabled={isSubmitting}
              className="bg-gradient-to-r from-accent to-sky-400 text-slate-950 font-bold py-3 sm:py-3.5 rounded-xl hover:shadow-[0_0_30px_rgba(45,212,191,0.45)] transition-shadow duration-300 disabled:opacity-50 text-sm sm:text-base"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </motion.button>
          </form>
        </div>
      </Reveal>
    </AnimatedPage>
  );
}
