import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X } from 'lucide-react';
import './App.css';

const App = () => {
  const [lockedModal, setLockedModal] = useState(null);
  const [passwordInput, setPasswordInput] = useState('');

  const links = [
    { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/samuel.musa.adinata.5/', locked: false, icon: '📷' },
    { id: 'threads', name: 'Threads', url: 'https://www.threads.com/@samuel.musa.adinata.5?hl=id', locked: false, icon: '💬' },
    { id: 'interpals', name: 'Interpals', url: 'https://www.interpals.net/SamuelMusaAdinata-5', locked: false, icon: '🌍' },
    { id: 'github', name: 'GitHub', url: 'https://github.com/samuelmusaadinata', locked: false, icon: '🐙' },
    { id: 'quora', name: 'Quora', url: 'https://www.quora.com/profile/Samuel-Musa-Adinata', locked: false, icon: '❓' },
    { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/samuel-musa-adinata-b6a881224', locked: false, icon: '💼' },
    { id: 'youtube1', name: 'YouTube', url: 'https://www.youtube.com/@smusaad1822', locked: false, icon: '📺' },
    { id: 'pinterest', name: 'Pinterest', url: 'https://id.pinterest.com/musaadinata5/', locked: false, icon: '📌' },
    { id: 'email', name: 'Email', url: 'mailto:musaadinata5@gmail.com', locked: false, icon: '✉️' },
    { id: 'patreon', name: 'Patreon', url: '#', locked: true, icon: '❤️' },
    { id: 'reddit', name: 'Reddit', url: '#', locked: true, icon: '🔗' },
    { id: 'x', name: 'X (Twitter)', url: '#', locked: true, icon: '𝕏' },
    { id: 'whatsapp', name: 'WhatsApp', url: '#', locked: true, icon: '💬' },
    { id: 'telegram', name: 'Telegram', url: '#', locked: true, icon: '✈️' },
    { id: 'discord', name: 'Discord', url: '#', locked: true, icon: '🎮' },
    { id: 'youtube2', name: 'YouTube 2', url: '#', locked: true, icon: '📺' },
    { id: 'teams', name: 'Microsoft Teams', url: '#', locked: true, icon: '👥' },
    { id: 'tor', name: 'Tor Barker', url: '#', locked: true, icon: '🔐' },
  ];

  const handleLinkClick = (link) => {
    if (link.locked) {
      setLockedModal(link.id);
      setPasswordInput('');
    } else {
      window.open(link.url, '_blank');
    }
  };

  const handlePasswordSubmit = () => {
    // Semua password akan dibilang salah
    setPasswordInput('');
    // Bisa tambahkan feedback error di sini jika diperlukan
  };

  const handleCloseModal = () => {
    setLockedModal(null);
    setPasswordInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlePasswordSubmit();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Samuel Musa Adinata
            </h1>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Digital Creator</p>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {links.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => handleLinkClick(link)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                link.locked
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 text-gray-300 border border-gray-600 hover:border-red-500'
                  : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border border-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50'
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="truncate">{link.name}</span>
              {link.locked && (
                <Lock size={14} className="ml-auto flex-shrink-0" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p>© 2026 Samuel Musa Adinata. All links verified.</p>
        </div>
      </motion.div>

      {/* Locked Modal */}
      <AnimatePresence>
        {lockedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 max-w-sm w-full border border-gray-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Lock size={20} className="text-red-500" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {links.find(l => l.id === lockedModal)?.name}
                  </h2>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-1 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              <p className="text-gray-300 text-sm mb-6">
                This link requires authorization. Please enter the access code.
              </p>

              <div className="space-y-4">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter access code"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  autoFocus
                />

                {passwordInput && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400 font-medium"
                  >
                    ✗ Access code incorrect
                  </motion.div>
                )}

                <button
                  onClick={handlePasswordSubmit}
                  className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 active:scale-95"
                >
                  Verify Access
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
