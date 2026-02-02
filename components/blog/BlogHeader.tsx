import { motion } from "framer-motion";

export const BlogHeader = () => {
  return (
    <div className="bg-gradient-to-br from-primary-light to-accent py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
          AI Content Creation Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Expert analysis, editing tips, and best practices for AI-powered content creation
        </p>
      </div>
    </div>
  );
};