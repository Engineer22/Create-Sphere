import { Layout } from "@/components/Layout";
import { Check } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Pricing = () => {
const PricingFeatures = {
  basic: [
    "Access to basic features",
    "Community support",
    "1 project",
    "Basic analytics",
  ],
  pro: [
    "All Basic features",
    "Priority support",
    "10 projects",
    "Advanced analytics",
    "Custom domains",
    "Team collaboration",
  ],
  enterprise: [
    "All Pro features",
    "24/7 Dedicated support",
    "Unlimited projects",
    "Enterprise analytics",
    "Custom integration",
    "SLA guarantee",
    "Advanced security",
  ],
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "This platform has transformed how we create content. The ROI has been incredible!",
    avatar: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "The enterprise features are exactly what we needed for our team's scaling needs.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    company: "CreativeStudio",
    content: "Started with the free plan and upgraded to Pro. Best decision for my business!",
    avatar: "/placeholder.svg"
  }
];

const features = [
  { name: "Access to basic features", basic: true, pro: true, enterprise: true },
  { name: "Community support", basic: true, pro: true, enterprise: true },
  { name: "Basic analytics", basic: true, pro: true, enterprise: true },
  { name: "1 project", basic: true, pro: false, enterprise: true },
  { name: "Priority support", basic: false, pro: true, enterprise: true },
  { name: "10 projects", basic: false, pro: true, enterprise: true },
  { name: "Advanced analytics", basic: false, pro: true, enterprise: true },
  { name: "Custom domains", basic: false, pro: true, enterprise: true },
  { name: "Team collaboration", basic: false, pro: true, enterprise: true },
  { name: "All Pro features", basic: false, pro: false, enterprise: true },
  { name: "24/7 Dedicated support", basic: false, pro: false, enterprise: true },
  { name: "Unlimited projects", basic: false, pro: false, enterprise: true },
  { name: "Enterprise analytics", basic: false, pro: false, enterprise: true },
  { name: "Custom integration", basic: false, pro: false, enterprise: true },
  { name: "SLA guarantee", basic: false, pro: false, enterprise: true },
  { name: "Advanced security", basic: false, pro: false, enterprise: true },
];

  return (
    <Layout>
      <div className="py-20 px-4 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features with varying levels of support and capabilities.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="mb-16 overflow-x-auto bg-white rounded-xl shadow-lg p-6">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/5">
                  <TableHead className="w-1/4 font-bold text-lg">Features</TableHead>
                  <TableHead className="w-1/4 font-bold text-lg">Basic</TableHead>
                  <TableHead className="w-1/4 font-bold text-lg">Pro</TableHead>
                  <TableHead className="w-1/4 font-bold text-lg">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-white border-b">
                  <TableCell className="font-medium">Price</TableCell>
                  <TableCell>Free</TableCell>
                  <TableCell>$30/month</TableCell>
                  <TableCell>Contact Us</TableCell>
                </TableRow>
                {features.map((feature, index) => (
                  <TableRow key={index} className="bg-white border-b">
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell>
                      {feature.basic && <Check className="text-green-500" />}
                    </TableCell>
                    <TableCell>
                      {feature.pro && <Check className="text-green-500" />}
                    </TableCell>
                    <TableCell>
                      {feature.enterprise && <Check className="text-green-500" />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
              <p className="text-3xl font-bold mb-6">Free</p>
              <Button className="w-full">Get Started</Button>
            </div>
            <div className="bg-primary/5 border-2 border-primary rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
              <p className="text-3xl font-bold mb-6">$30/month</p>
              <Button className="w-full bg-primary hover:bg-primary-hover">Upgrade to Pro</Button>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h2 className="text-2xl font-semibold mb-4">Enterprise Plan</h2>
              <p className="text-3xl font-bold mb-6">Custom</p>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 transform transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default Pricing;
