import { useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Chatbot } from "./Chatbot";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {children}
      </div>
      <Footer />

      {/* Floating chat button */}
      <Button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center bg-primary text-white"
        size="icon"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};