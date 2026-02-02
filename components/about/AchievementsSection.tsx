import { Users, Trophy, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "10K+ Users",
    description: "Growing user base across platforms",
    icon: Users
  },
  {
    title: "3 Industry Awards",
    description: "For AI Innovation",
    icon: Trophy
  },
  {
    title: "98% Uptime",
    description: "Reliable service delivery",
    icon: Globe
  }
];

export const AchievementsSection = () => {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-primary-light/50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary-dark">Our Milestones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="text-center p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm"
            >
              <CardContent>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary-dark">{achievement.title}</h3>
                <p className="text-gray-600 text-base md:text-lg">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};