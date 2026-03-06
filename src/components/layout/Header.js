"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { serviceDropdownLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

const linkClass = "text-sm font-medium text-brand-charcoal dark:text-night-text transition-colors hover:text-brand-charcoal-dark dark:hover:text-night-accent";
const mobileLinkClass = "text-lg font-medium text-brand-charcoal dark:text-night-text py-3 border-b border-brand-nude dark:border-night-border hover:text-brand-charcoal-dark dark:hover:text-night-accent transition-colors";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isServicesOpen) { setIsServicesOpen(false); return; }
        if (isMenuOpen) { setIsMenuOpen(false); menuButtonRef.current?.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, isServicesOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
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
            <Link href="/" className="flex items-center gap-2">
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
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">

              <Link href="/" className={linkClass}>Home</Link>
              <Link href="/about" className={linkClass}>About</Link>
              <Link href="/insights" className={linkClass}>Insights</Link>

              {/* Services dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setIsServicesOpen((o) => !o)}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  className={cn(linkClass, "flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent focus-visible:ring-offset-2 rounded-sm")}
                >
                  Services
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={cn("transition-transform duration-200", isServicesOpen && "rotate-180")}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-brand-off-white dark:bg-night-raised rounded-lg shadow-lg ring-1 ring-brand-nude dark:ring-night-border py-2 z-50">
                    {serviceDropdownLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm text-brand-charcoal dark:text-night-text hover:bg-brand-cream dark:hover:bg-night-muted transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="px-4 py-2 bg-brand-charcoal dark:bg-night-accent text-white dark:text-night rounded-md text-sm font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent focus-visible:ring-offset-2"
              >
                Get in Touch
              </Link>
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
          "md:hidden fixed inset-0 top-16 bg-brand-off-white dark:bg-night z-40 transition-transform duration-300 overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 gap-1" aria-label="Mobile navigation">

          <Link href="/" onClick={closeMenu} className={mobileLinkClass}>Home</Link>
          <Link href="/about" onClick={closeMenu} className={mobileLinkClass}>About</Link>
          <Link href="/insights" onClick={closeMenu} className={mobileLinkClass}>Insights</Link>

          {/* Services expandable */}
          <div className="border-b border-brand-nude dark:border-night-border">
            <button
              onClick={() => setIsMobileServicesOpen((o) => !o)}
              aria-expanded={isMobileServicesOpen}
              className="w-full flex items-center justify-between py-3 text-lg font-medium text-brand-charcoal dark:text-night-text hover:text-brand-charcoal-dark dark:hover:text-night-accent transition-colors focus-visible:outline-none"
            >
              Services
              <ChevronDown
                size={18}
                aria-hidden="true"
                className={cn("transition-transform duration-200", isMobileServicesOpen && "rotate-180")}
              />
            </button>
            {isMobileServicesOpen && (
              <div className="pb-3 flex flex-col gap-1 pl-4">
                {serviceDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="py-2 text-base text-brand-charcoal/80 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 px-6 py-3 bg-brand-charcoal dark:bg-night-accent text-white dark:text-night rounded-md text-center font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  );
}
