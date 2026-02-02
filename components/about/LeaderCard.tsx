import { Linkedin, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LeadershipMember } from "@/types/leadership";

interface LeaderCardProps {
  leader: LeadershipMember;
}

export const LeaderCard = ({ leader }: LeaderCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-4 md:p-6">
        <div className="aspect-square w-24 md:w-32 mx-auto mb-4 overflow-hidden rounded-full">
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
            }}
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-center mb-1">{leader.name}</h3>
        <p className="text-primary text-sm md:text-base text-center mb-2">{leader.role}</p>
        <p className="text-gray-600 text-sm md:text-base text-center mb-4">{leader.bio}</p>
        <div className="flex justify-center gap-4">
          {leader.social.linkedin && (
            <a
              href={leader.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {leader.social.twitter && (
            <a
              href={leader.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {leader.social.github && (
            <a
              href={leader.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};