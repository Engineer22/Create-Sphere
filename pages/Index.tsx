import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <div className="bg-gradient-to-br from-primary-light to-accent py-20">
          <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Powerful Features for Content Creators
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all the ways GenieAI can transform your content creation process
            </p>
          </div>
          <Features />
        </div>
        <HowItWorks />
      </motion.div>
    </Layout>
  );
};

export default Index;