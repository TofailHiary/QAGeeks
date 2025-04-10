import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg border-t-4 border-[#00A2FF] hover:-translate-y-1 relative">
      <div className="text-[#00A2FF] mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00A2FF] to-[#9C27FF]">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-[#9C27FF]/10 border-l-transparent border-l-[30px]"></div>
    </div>
  );
};

export interface Props {
  title: string;
  subtitle: string;
  features: FeatureCardProps[];
}

export const FeatureSection = ({ title, subtitle, features }: Props) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
