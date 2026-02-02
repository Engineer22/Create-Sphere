import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl text-primary-dark mb-4">GenieAI</h3>
            <p className="text-gray-600 mb-4">
              Transform Your Content Creation with AI - Your Digital Genie for Creative Solutions
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-primary-dark mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary">Pricing</Link></li>
              <li><Link to="/demo" className="text-gray-600 hover:text-primary">Demo</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-primary">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary-dark mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-primary-dark mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} GenieAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};