import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Play, Download, Share2 } from "lucide-react";

const Demo = () => {
  const { toast } = useToast();

  const handleTryDemo = () => {
    toast({
      title: "Demo Started",
      description: "Starting the interactive demo experience...",
    });
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-br from-primary-light to-accent py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              Try GenieAI Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Experience the power of AI-driven content creation firsthand
            </p>
            <Button
              size="lg"
              onClick={handleTryDemo}
              className="bg-primary hover:bg-primary-hover text-white"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Demo
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Tutorial</h3>
              <p className="text-gray-600">
                Follow our guided tour to learn all the key features
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sample Content</h3>
              <p className="text-gray-600">
                Download example content created with GenieAI
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Share Results</h3>
              <p className="text-gray-600">
                Share your demo creations with your team
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Demo;