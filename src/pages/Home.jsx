import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Home() {
  const [trustScore, setTrustScore] = useState(80);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTrustScore((prev) => (prev < 100 ? prev + 1 : 0));
      return () => clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const getEmoji = (score) => {
    if (score < 40) return '😡';
    if (score < 70) return '😐';
    return '😄';
  };

  return (
    <motion.div
    variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900 font-sans"
    >
      <div className="min-h-screen bg-white text-gray-900 font-sans">

        <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Drop. Analyze. Stay Safe.
          </motion.h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Phishing emails are getting smarter —
            and most people don’t have tools smart enough to spot them. <span className="font-medium text-gray-900">Inbox Canary</span> gives you AI-powered protection with privacy-conscious options.
          </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-sm font-medium text-red-600 relative overflow-hidden"
        >
          <span className="relative z-10">
            Over 90% of cyberattacks begin with a phishing email. Don’t let this happen to you.
          </span>
          <motion.span
            className="absolute top-0 left-[-100%] w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
            animate={{ left: "100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ zIndex: 0 }}
          />
        </motion.p>

        <motion.button
          onClick={() => navigate('/models')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-6 py-3 bg-black text-white text-lg rounded-full shadow-md hover:bg-gray-800 transition"
        >
          Download for macOS
        </motion.button>
        </section>

        <section className="py-20 px-6 bg-gray-50 text-center">
          <h2 className="text-2xl font-semibold mb-6">AI-Powered Trust Score</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-64 h-6 bg-gray-300 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-green-500 absolute left-0 top-0"
                animate={{ width: `${trustScore}%` }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {trustScore}%
              </motion.div>
            </div>
            <div className="text-5xl">{getEmoji(trustScore)}</div>
            <p className="text-gray-500">Live demo of how Inbox Canary scores an email's safety.</p>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 py-10">
          © 2025 Inbox Canary. All rights reserved.
        </footer>
      </div>
    </motion.div>
  );
}
