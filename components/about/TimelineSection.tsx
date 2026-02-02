import { Calendar } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Seed Funding Round",
    description: "Currently raising funds to accelerate our AI development"
  },
  {
    year: "2023",
    title: "Product Launch",
    description: "Successfully launched our first AI product"
  },
  {
    year: "2023",
    title: "Company Founded",
    description: "Started with a vision to revolutionize AI accessibility"
  }
];

export const TimelineSection = () => {
  return (
    <div className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex md:block md:w-24">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-base md:text-lg font-semibold text-primary">{event.year}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};