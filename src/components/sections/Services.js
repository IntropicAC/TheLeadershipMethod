import { Users, MessageCircle, Building2 } from "lucide-react";
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
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {servicesContent.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesContent.services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={index}
              className="bg-brand-charcoal-dark rounded-lg p-8 hover:bg-[#353535] transition-colors"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 bg-brand-nude rounded-full flex items-center justify-center">
                <Icon size={28} className="text-brand-charcoal" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold mb-4 text-brand-nude">
                {service.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-brand-nude mt-1.5">•</span>
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
