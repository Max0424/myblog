import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Instructions() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-6 bg-white text-gray-800"
    >
      <h1 className="text-4xl font-bold text-center mb-6">How to Use Inbox Canary</h1>
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16 text-lg">
        Inbox Canary detects phishing threats in .eml files. Here’s how to use it:
      </p>

      <div className="grid md:grid-cols-2 gap-16 max-w-[1200px] mx-auto">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-center md:text-left">1. Download the Email</h2>
          <img
            src="/images/screenshot1.png"
            alt="Download message from Gmail"
            className="rounded shadow-xl w-full mb-4"
          />
          <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
            In Gmail, click the three-dot menu and choose <strong>“Download message”</strong>.
            This saves the email as a <code>.eml</code> file.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-center md:text-left">2. Drag it into Inbox Canary</h2>
          <img
            src="/images/screenshot2.png"
            alt="Drag .eml into Inbox Canary"
            className="rounded shadow-xl w-full mb-4"
          />
          <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
            Open Inbox Canary and drop the downloaded file into the analyzer. Then click <strong>Analyze Email</strong>.
          </p>
        </div>
      </div>
    </motion.div>
  );
}