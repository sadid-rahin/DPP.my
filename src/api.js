// src/api.js

// 1. Backend Simulation for Contact Form
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    // Simulate a 1-second network delay
    setTimeout(() => {
      console.log("📩 BACKEND LOG: New message received:", formData);
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1000);
  });
};

// 2. Backend Simulation for Fetching Reviews
export const fetchReviews = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedReviews = localStorage.getItem('dpp_reviews');
      if (storedReviews) {
        resolve(JSON.parse(storedReviews));
      } else {
        // Default reviews if database (localStorage) is empty
        const defaultReviews = [
          { name: "Sarah Jenkins", text: "DPP completely transformed our digital presence. The custom web app is blazing fast.", rating: 5 }
        ];
        localStorage.setItem('dpp_reviews', JSON.stringify(defaultReviews));
        resolve(defaultReviews);
      }
    }, 500);
  });
};

// 3. Backend Simulation for Saving a New Review
export const submitReview = async (reviewData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedReviews = JSON.parse(localStorage.getItem('dpp_reviews')) || [];
      const newReview = { ...reviewData, rating: 5 }; // Auto-assign 5 stars for now
      
      const updatedReviews = [newReview, ...storedReviews];
      localStorage.setItem('dpp_reviews', JSON.stringify(updatedReviews)); // Save to browser DB
      
      resolve({ success: true, review: newReview });
    }, 800);
  });
};