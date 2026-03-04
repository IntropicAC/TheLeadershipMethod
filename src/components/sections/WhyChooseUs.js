import { Target, Brain, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import { whyChooseUsContent } from "@/lib/constants";

const iconMap = {
  Target: Target,
  Brain: Brain,
  TrendingUp: TrendingUp,
};

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" background="light">
      <div className="text-center mb-12">
        <h2 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
          {whyChooseUsContent.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUsContent.items.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <Card key={index} variant="light" className="text-center p-8">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-brand-nude dark:bg-night-muted rounded-full flex items-center justify-center">
                <Icon size={32} className="text-brand-charcoal dark:text-night-accent" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-brand-charcoal/70 dark:text-night-soft leading-relaxed">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
