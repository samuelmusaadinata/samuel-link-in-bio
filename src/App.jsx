import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X } from 'lucide-react';
import './App.css';

const App = () => {
  const [isLocked, setIsLocked] = useState(true);
  const socialLinks = [
    // Add your social media links here
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile' },
    { name: 'Twitter', url: 'https://twitter.com/yourprofile' },
    // Add more social media links as needed
  ];

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="app">
      <h1>My Social Links</h1>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
      <button onClick={toggleLock}>
        {isLocked ? <Lock /> : <X />}
      </button>

      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal"
          >
            <h2>Locked</h2>
            <p>This content is locked.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;