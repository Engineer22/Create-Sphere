import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us, including when you create an account,
              use our services, or contact us for support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to provide, maintain, and improve our services,
              to communicate with you, and to develop new features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell your personal information. We may share your information only in the
              circumstances described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access or disclosure.
            </p>
          </section>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Privacy;