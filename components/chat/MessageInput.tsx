import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MessageInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
}

export const MessageInput = ({ input, setInput, handleSend }: MessageInputProps) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      handleSend();
    }}
    className="p-4 border-t border-gray-100"
  >
    <div className="flex gap-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1"
      />
      <Button type="submit" size="icon">
        <Send className="w-4 h-4" />
      </Button>
    </div>
  </form>
);