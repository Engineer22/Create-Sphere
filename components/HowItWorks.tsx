import { ArrowRight, PenLine, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Write your prompt",
    description: "Start by describing what you want to create - whether it's a video, image, or voice content.",
    icon: <PenLine className="w-6 h-6 text-primary" />,
  },
  {
    number: "02",
    title: "AI generates content",
    description: "Our advanced AI transforms your prompt into high-quality, professional content instantly.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    number: "03",
    title: "Share or schedule",
    description: "Publish your content immediately or schedule it for later with our automation tools.",
    icon: <Share2 className="w-6 h-6 text-primary" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create professional content in three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white p-8 rounded-xl relative z-10 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-primary">{step.number}</div>
                  <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-dark">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};