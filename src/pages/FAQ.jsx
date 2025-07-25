import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function FAQ() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-6 text-gray-800 bg-white"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto space-y-12 text-left">

        <div>
          <h2 className="text-xl font-semibold mb-2">❓Is the phishing analysis automatic?</h2>
          <p className="text-gray-700">
            <strong>Not at this time.</strong> Inbox Canary only analyzes a file when you choose to drag and drop it and click <strong>Analyze</strong>. Nothing happens automatically — your emails stay on your device unless you explicitly initiate analysis with the <strong>Intellex</strong> model (which uses OpenAI’s API).
            
            <br /><br />
            That said, we’re preparing an <strong>automatic version</strong> that will analyze emails in real time — once frameworks like the EU approve local agent functionality. It will be private, transparent, and always user-controlled.
          </p>
        </div>

        {/* Add more FAQ items below */}
        <div>
          <h2 className="text-xl font-semibold mb-2">❓Does Inbox Canary store my data?</h2>
          <p className="text-gray-700">
            Inbox Canary itself does not store or collect any data.
            <br /><br />
            When you use the <strong>Intellex</strong> model (powered by OpenAI), the email content you provide is sent securely to OpenAI’s servers for analysis. That data may be used under OpenAI’s API usage policy. If you're concerned about privacy, we recommend using the <strong>Vault</strong> model once it becomes available — which runs entirely offline.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓What is an .eml file?</h2>
          <p className="text-gray-700">
            An <code>.eml</code> file is a standard email format that stores the full contents of an email, including headers, body, and attachments. Most email providers (like Gmail, Outlook and Apple Mail) allow you to download emails in this format.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓Can Inbox Canary detect all types of phishing?</h2>
          <p className="text-gray-700">
            Inbox Canary uses large language models trained to detect common phishing techniques — including suspicious language, urgency cues, impersonation, and spoofing. While it’s highly effective, no tool is perfect. Always use best practices and verify suspicious emails manually when in doubt.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓What should I do if drag-and-drop isn’t working?</h2>
          <p className="text-gray-700">
            Ensure the file ends with <code>.eml</code>. If you’re still experiencing issues, try restarting the app or re-downloading the email file from your email client.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓Is Inbox Canary free to use?</h2>
          <p className="text-gray-700">
            Yes, Inbox Canary is currently free. Future versions may introduce additional features or tiers, but the core experience remains accessible to all users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">❓Is Inbox Canary available on Windows or other platforms?</h2>
          <p className="text-gray-700">
            Inbox Canary is currently available for macOS (Apple Silicon ARM64) only. Support for additional platforms may be considered in the future based on demand and technical feasibility.
          </p>
        </div>

      </div>
    </motion.div>
  );
}