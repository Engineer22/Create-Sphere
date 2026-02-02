import { Link } from "react-router-dom";
import { LogIn, HomeIcon, DollarSign, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationMobileProps {
  isOpen: boolean;
}

export const NavigationMobile = ({ isOpen }: NavigationMobileProps) => {
  return (
    <div
      className={cn(
        "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "max-h-screen" : "max-h-0"
      )}
    >
      <nav className="py-4 space-y-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
          <HomeIcon className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link to="/pricing" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
          <DollarSign className="w-4 h-4" />
          <span>Pricing</span>
        </Link>
        <Link to="/about" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
          <Users className="w-4 h-4" />
          <span>About</span>
        </Link>
        <Link to="/blog" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
          <BookOpen className="w-4 h-4" />
          <span>Blog</span>
        </Link>
        
        <div className="border-t border-gray-100 mt-4 pt-4 px-4">
          <Link to="/login">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <LogIn className="w-4 h-4" />
              Log in
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};