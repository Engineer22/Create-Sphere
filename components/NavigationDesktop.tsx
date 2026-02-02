import { Link } from "react-router-dom";
import { DollarSign, Users, BookOpen, HomeIcon } from "lucide-react";

export const NavigationDesktop = () => {
  return (
    <nav className="hidden lg:flex items-center">
      <Link 
        to="/" 
        className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
      >
        <HomeIcon className="w-4 h-4" />
        <span className="font-medium">Home</span>
      </Link>
      <Link 
        to="/pricing" 
        className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
      >
        <DollarSign className="w-4 h-4" />
        <span className="font-medium">Pricing</span>
      </Link>
      <Link 
        to="/about" 
        className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
      >
        <Users className="w-4 h-4" />
        <span className="font-medium">About</span>
      </Link>
      <Link 
        to="/blog" 
        className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
      >
        <BookOpen className="w-4 h-4" />
        <span className="font-medium">Blog</span>
      </Link>
    </nav>
  );
};