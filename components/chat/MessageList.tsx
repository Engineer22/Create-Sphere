import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => (
  <ScrollArea className="h-96 p-4">
    <div className="space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} text={message.text} sender={message.sender} />
      ))}
    </div>
  </ScrollArea>
);