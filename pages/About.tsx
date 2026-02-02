import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Users, Award, Globe } from "lucide-react";
import { AchievementsSection } from "@/components/about/AchievementsSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { ContactCTA } from "@/components/about/ContactCTA";

const About = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-light to-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-primary-dark mb-6"
            >
              About GenieAI
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Empowering creators with cutting-edge AI technology
            </motion.p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Team</h3>
              <p className="text-gray-600">
                A diverse group of AI experts, developers, and content creators working together.
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize content creation through innovative AI solutions.
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              <p className="text-gray-600">
                Helping creators worldwide produce high-quality content efficiently.
              </p>
            </motion.div>
          </div>
        </div>

        <AchievementsSection />
        <TimelineSection />
        <LeadershipSection />
        <ContactCTA />
      </motion.div>
    </Layout>
  );
};

export default About;