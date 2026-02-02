import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <div className="py-8 md:py-16 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Learn More?</h2>
        <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Get in touch with our team to discover how GenieAI can transform your content creation process.
        </p>
        <Button
          size="lg"
          className="gap-2"
          onClick={() => window.location.href = '/contact'}
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" />
          Contact Us
        </Button>
      </div>
    </div>
  );
};