import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Last updated: March 15, 2024
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using GenieAI's services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-600">
              Permission is granted to temporarily use GenieAI's services for personal, non-commercial
              transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Service Modifications</h2>
            <p className="text-gray-600">
              GenieAI reserves the right to modify or discontinue, temporarily or permanently, the service
              with or without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
            <p className="text-gray-600">
              You are responsible for maintaining the confidentiality of your account and password,
              and for restricting access to your computer.
            </p>
          </section>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Terms;