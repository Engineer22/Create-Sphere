import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Login attempted",
      description: "This is a demo login page. Authentication is not implemented yet.",
    });
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 animate-fade-up">
          <div className="text-center mb-8">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-primary-dark mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input 
                id="email"
                type="email" 
                placeholder="Enter your email" 
                required 
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input 
                id="password"
                type="password" 
                placeholder="Enter your password" 
                required 
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary focus:ring-primary mr-2"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:text-primary-hover">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
              Sign in
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-primary hover:text-primary-hover font-medium">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
