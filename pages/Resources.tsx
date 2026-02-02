import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { FileText, Video, Book, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Getting Started Guide",
      description: "Learn the basics of using GenieAI for content creation",
      icon: FileText,
      link: "#"
    },
    {
      id: 2,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      icon: Video,
      link: "#"
    },
    {
      id: 3,
      title: "Documentation",
      description: "Detailed documentation and API references",
      icon: Book,
      link: "#"
    }
  ];

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
              Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to get started with GenieAI
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <motion.div
                key={resource.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  asChild
                >
                  <a href={resource.link}>
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Resources;