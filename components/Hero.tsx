import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = () => {
    navigate("/register");
  };

  const handleVideoCreation = () => {
    toast({
      title: "Quick Start Guide",
      description: "Let's help you make your first wish come true!",
    });
    navigate("/demo");
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Updated background with blue tones instead of pink */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F0FB] via-white to-[#D3E4FD]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse -top-48 -left-24" />
            <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse top-48 -right-24" />
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-5" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
            Empowering Creators with AI-Powered Content Creation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create videos, voiceovers, images, and automate your content publishing—your digital genie makes it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleGetStarted}
            >
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary-light font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg flex items-center gap-2"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Watch Demo
            </Button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-12 inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={handleVideoCreation}
          >
            <p className="text-sm sm:text-base text-gray-600">
              ⚡️ Create a professional video in just 5 minutes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};