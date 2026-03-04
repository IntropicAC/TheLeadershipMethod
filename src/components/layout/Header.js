"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-brand-off-white/95 dark:bg-night/95 backdrop-blur-sm shadow-card"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/images/Logo.jpg"
                alt={siteConfig.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="hidden sm:block font-serif text-lg font-semibold text-brand-charcoal dark:text-night-text transition-colors">
                {siteConfig.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-brand-charcoal dark:text-night-text transition-colors hover:text-brand-charcoal-dark dark:hover:text-night-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 bg-brand-charcoal dark:bg-night-accent text-white dark:text-night rounded-md text-sm font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent focus-visible:ring-offset-2"
              >
                Get in Touch
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              className="md:hidden p-2 text-brand-charcoal dark:text-night-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent focus-visible:ring-offset-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — sibling of <header>, NOT a child, to avoid backdrop-filter
          creating a new containing block that breaks fixed positioning in Chrome/Safari */}
      <div
        id="mobile-nav"
        aria-hidden={!isMenuOpen}
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-brand-off-white dark:bg-night z-40 transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 gap-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-brand-charcoal dark:text-night-text py-2 border-b border-brand-nude dark:border-night-border hover:text-brand-charcoal-dark dark:hover:text-night-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-4 px-6 py-3 bg-brand-charcoal dark:bg-night-accent text-white dark:text-night rounded-md text-center font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </>
  );
}
