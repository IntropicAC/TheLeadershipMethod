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
              className="flex flex-col bg-brand-charcoal-dark dark:bg-night-raised rounded-lg p-8 border-t-2 border-brand-nude/50 dark:border-night-accent/50 hover:bg-brand-charcoal dark:hover:bg-night-muted transition-colors shadow-card dark:ring-1 dark:ring-night-border"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-5 bg-brand-nude/10 dark:bg-night-muted rounded-full flex items-center justify-center">
                <Icon size={28} className="text-brand-nude dark:text-night-accent" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-subheading font-semibold mb-3 text-brand-nude dark:text-night-accent">
                {service.title}
              </h3>

              {/* Divider */}
              <hr className="border-brand-nude/20 dark:border-night-border mb-6" />

              {/* Items */}
              <ul className="space-y-5 flex-1">
                {service.items.map((item, itemIndex) => {
                  const [title, description] = item.split(" - ");
                  return (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-brand-nude/15 flex items-center justify-center">
                        <Check size={11} className="text-brand-nude" aria-hidden="true" strokeWidth={3} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-brand-nude/90 dark:text-night-text mb-1">
                          {title}
                        </span>
                        <span className="block text-sm leading-relaxed text-gray-400 dark:text-night-soft">
                          {description}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
