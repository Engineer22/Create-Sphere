import { useState } from "react";
import { X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MessageList } from "./chat/MessageList";
import { MessageInput } from "./chat/MessageInput";
import { handleUserQuery } from "@/utils/chatUtils";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm your GenieAI assistant. Your wish is my command! What would you like to know about our magical AI services?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    collecting: false,
  });
  const { toast } = useToast();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    if (userDetails.collecting) {
      if (!userDetails.name) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: "Could you please share your name?",
            sender: "bot",
          }]);
        }, 500);
        setUserDetails(prev => ({ ...prev, name: input }));
      } else if (!userDetails.email) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: "Great! And what's your email address so we can get back to you?",
            sender: "bot",
          }]);
        }, 500);
        setUserDetails(prev => ({ ...prev, email: input }));
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: `Thanks ${userDetails.name}! Our team will contact you at ${userDetails.email} soon. Is there anything else you'd like to know?`,
            sender: "bot",
          }]);
        }, 500);
        setUserDetails({ name: "", email: "", collecting: false });
        toast({
          title: "Contact details received",
          description: "Our team will get in touch with you soon!",
        });
      }
    } else {
      setTimeout(() => {
        const { response, shouldCollectDetails } = handleUserQuery(input);
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: response,
          sender: "bot",
        }]);
        if (shouldCollectDetails) {
          setUserDetails(prev => ({ ...prev, collecting: true }));
        }
      }, 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-fade-up">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-gray-900">Chat with us</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <MessageList messages={messages} />
      <MessageInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
};