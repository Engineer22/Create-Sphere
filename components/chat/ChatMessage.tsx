import { cn } from "@/lib/utils";

interface ChatMessageProps {
  text: string;
  sender: "user" | "bot";
}

export const ChatMessage = ({ text, sender }: ChatMessageProps) => (
  <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={cn(
        "max-w-[80%] rounded-lg p-3",
        sender === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-900"
      )}
    >
      {text}
    </div>
  </div>
);