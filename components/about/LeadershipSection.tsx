import { LeaderCard } from "./LeaderCard";
import { leadershipTeam } from "@/data/leadershipData";

export const LeadershipSection = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {leadershipTeam.map((leader, index) => (
            <LeaderCard key={index} leader={leader} />
          ))}
        </div>
      </div>
    </div>
  );
};