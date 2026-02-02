import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NavigationAuth = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link to="/login">
        <Button variant="ghost" className="text-gray-600 hover:text-primary">
          <LogIn className="w-4 h-4 mr-2" />
          Log in
        </Button>
      </Link>
      <Link to="/register">
        <Button className="bg-primary hover:bg-primary-hover text-white">
          Get Started Free
        </Button>
      </Link>
    </div>
  );
};