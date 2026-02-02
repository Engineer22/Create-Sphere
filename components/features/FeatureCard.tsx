import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

interface Example {
  icon: React.ReactNode;
  text: string;
}

interface BeforeAfter {
  before: string;
  after: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  examples?: Example[];
  demoUrl?: string;
  beforeAfter?: BeforeAfter;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  details,
  examples,
  demoUrl,
  beforeAfter,
}: FeatureCardProps) => {
  return (
    <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-primary-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {beforeAfter && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <img 
                src={beforeAfter.before} 
                alt="Before" 
                className="rounded-lg mb-2 w-full h-32 object-cover"
              />
              <span className="text-sm text-gray-500">Before</span>
            </div>
            <div className="text-center">
              <img 
                src={beforeAfter.after} 
                alt="After" 
                className="rounded-lg mb-2 w-full h-32 object-cover"
              />
              <span className="text-sm text-gray-500">After</span>
            </div>
          </div>
        )}
        
        {demoUrl && (
          <div className="relative rounded-lg overflow-hidden mb-4">
            <video 
              className="w-full rounded-lg"
              poster="/placeholder.svg"
              controls
            >
              <source src={demoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        <ul className="space-y-2 mb-4">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-500">
              <Zap className="w-4 h-4 text-primary mr-2 shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
        
        {examples && (
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-600 mb-2">Perfect for:</p>
            <div className="flex gap-3">
              {examples.map((example, idx) => (
                <div key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                  {example.icon}
                  <span>{example.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};