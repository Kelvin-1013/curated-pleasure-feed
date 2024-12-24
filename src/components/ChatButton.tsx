import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ChatButton() {
  const { toast } = useToast();

  const handleChatClick = () => {
    toast({
      title: "Chat coming soon!",
      description: "This feature will be available in the next update.",
    });
  };

  return (
    <Button
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg"
      size="icon"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
}