import Image from "next/image";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal dark:bg-night-raised text-white dark:text-night-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/Logo.jpg"
                alt={siteConfig.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-serif text-xl font-semibold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail size={18} aria-hidden="true" />
                {siteConfig.email}
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-charcoal-dark dark:bg-night-muted rounded-full hover:bg-brand-nude hover:text-brand-charcoal dark:hover:bg-night-accent dark:hover:text-night transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-nude focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                  aria-label="Instagram"
                >
                  <Instagram size={20} aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-charcoal-dark dark:bg-night-muted rounded-full hover:bg-brand-nude hover:text-brand-charcoal dark:hover:bg-night-accent dark:hover:text-night transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-nude focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 dark:border-night-border text-center text-gray-400 dark:text-night-soft text-sm">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
