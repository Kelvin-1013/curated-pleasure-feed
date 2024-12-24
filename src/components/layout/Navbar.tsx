import { Bell, MessageSquare, Search, User } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">🦄 Unicorns Club</span>
        </div>
        
        <div className="flex items-center space-x-4 ml-auto">
          <div className="w-64">
            <Input
              type="search"
              placeholder="Search investors..."
              className="md:w-[200px] lg:w-[300px]"
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}