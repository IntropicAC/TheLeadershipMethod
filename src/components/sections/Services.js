import { Users, MessageCircle, Building2, Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { servicesContent } from "@/lib/constants";

const iconMap = {
  Users: Users,
  MessageCircle: MessageCircle,
  Building2: Building2,
};

export default function Services() {
  return (
    <SectionWrapper id="services" background="dark">
      <div className="text-center mb-12">
        <h2 className="font-serif text-heading font-bold mb-4">
          {servicesContent.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesContent.services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={index}
              className="bg-brand-charcoal-dark dark:bg-night-raised rounded-lg p-8 hover:bg-brand-charcoal dark:hover:bg-night-muted transition-colors shadow-card"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 bg-brand-nude dark:bg-night-muted rounded-full flex items-center justify-center">
                <Icon size={28} className="text-brand-charcoal dark:text-night-accent" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-subheading font-semibold mb-4 text-brand-nude dark:text-night-accent">
                {service.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-nude/15 flex items-center justify-center">
                      <Check size={11} className="text-brand-nude" aria-hidden="true" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
