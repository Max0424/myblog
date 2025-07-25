import { motion } from "framer-motion";

export default function Models() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-center"
      >
        Available Models
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-500 max-w-xl mx-auto mb-10"
      >
        Choose between cloud-powered AI or upcoming offline models. Whether you're prioritizing speed or privacy, Inbox Canary adapts to your needs.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Intellex Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-blue-50 flex flex-col justify-between min-h-[340px]"
        >
          <div>
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
              Available
            </span>
            <h2 className="text-2xl font-semibold mb-2">Intellex</h2>
            <p className="text-gray-700 text-sm">
              This model connects to OpenAI's API for phishing analysis using GPT-4.
              It provides fast and highly accurate results. Requires an internet connection.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Powered by GPT-4</li>
              <li>Cloud-based, always up-to-date</li>
              <li>Handles complex threats</li>
            </ul>
          </div>
          <button className="mt-6 bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition">
            Download Intellex
          </button>
        </motion.div>

        {/* Vault Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-gray-50 min-h-[340px]"
        >
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2">
            Coming Soon
          </span>
          <h2 className="text-2xl font-semibold mb-2">Vault</h2>
          <p className="text-gray-700 text-sm">
            This offline model will use a locally hosted large language model like LLaMA.
            Designed for privacy-focused users who prefer not to rely on external APIs.
          </p>
          <ul className="mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Runs entirely offline</li>
            <li>No internet required</li>
            <li>Ideal for sensitive environments</li>
          </ul>
        </motion.div>
      </div>
      <div className="mt-12 max-w-3xl mx-auto border rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">Intellex</th>
              <th className="px-4 py-3">Vault</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-3 font-medium">Requires Internet</td>
              <td className="px-4 py-3">✅ Yes</td>
              <td className="px-4 py-3">❌ No</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Analysis Location</td>
              <td className="px-4 py-3">🔗 Cloud (OpenAI)</td>
              <td className="px-4 py-3">🖥️ Local Machine</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Setup Required</td>
              <td className="px-4 py-3">⚡ None</td>
              <td className="px-4 py-3">🛠️ Minimal (Coming Soon)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Performance</td>
              <td className="px-4 py-3">⚡ Fast & consistent</td>
              <td className="px-4 py-3">🔄 Depends on hardware</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Model Updates</td>
              <td className="px-4 py-3">✅ Always up-to-date</td>
              <td className="px-4 py-3">🔧 Manual (user-managed)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <h2 className="text-xl font-semibold mb-2">Which one should I choose?</h2>
        <p className="text-gray-700">
          Use <strong>Intellex</strong> if you want speed and simplicity. Pick <strong>Vault</strong> if privacy is your top priority.
        </p>
      </motion.div>
    </div>
  );
}