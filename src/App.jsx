// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import ProblemSolution from './pages/ProblemSolution';
import Plan from './pages/Plan';
import Review from './pages/Review';
import Contact from './pages/Contact';

// Wrapper for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Service />} />
        <Route path="/problem-solution" element={<ProblemSolution />} />
        <Route path="/plans" element={<Plan />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}