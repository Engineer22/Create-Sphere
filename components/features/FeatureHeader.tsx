import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const FeatureHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-2 mb-4"
      >
        <Sparkles className="w-5 h-5 text-primary" />
        <span className="text-primary font-medium">Features</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold text-primary-dark mb-4"
      >
        Everything You Need
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        Powerful AI tools to transform your content creation workflow
      </motion.p>
    </div>
  );
};