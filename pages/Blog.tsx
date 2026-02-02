import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogPost } from "@/components/blog/BlogPost";
import { blogPosts } from "@/data/BlogData";

const Blog = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BlogHeader />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Blog;