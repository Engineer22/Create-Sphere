import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    icon: any;
    image: string;
  };
}

export const BlogPost = ({ post }: BlogPostProps) => {
  const Icon = post.icon;
  
  return (
    <motion.article
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <Icon className="w-4 h-4" />
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 text-primary-dark hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </motion.article>
  );
};