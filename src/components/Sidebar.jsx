import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <button
        className="fixed top-6 left-6 z-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-6"
      >
        <button
          className="self-end mb-6"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg font-semibold hover:text-blue-600"
        >
          🏠 Home
        </Link>
        <Link to="/models" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-blue-600">
          🧠 Models
        </Link>
        <Link to="/instructions" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-blue-600">
          📄 How to Use
        </Link>
        <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold hover:text-blue-600">
          ❓ FAQ
        </Link>
      </motion.div>

      {/* 🔑 This renders your current route inside the layout */}
      <Outlet />
    </div>
  );
}