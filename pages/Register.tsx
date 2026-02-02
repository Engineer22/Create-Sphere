import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Registration attempted",
      description: "This is a demo registration page. Authentication is not implemented yet.",
    });
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow animate-fade-up">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary-dark mb-2">Get Started Free</h1>
              <p className="text-gray-600">Create your account to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full"
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full"
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Create a password" 
                  className="w-full"
                  required 
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white">
                Create Account
              </Button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:text-primary-hover font-medium">
                  Sign in
                </a>
              </p>
            </form>
          </div>
      </div>
    </Layout>
  );
};

export default Register;
