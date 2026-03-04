"use client";

import { useState } from "react";
import { Mail, Instagram, Linkedin, Send, CheckCircle, Copy, Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { contactContent, siteConfig } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Enquiry: ${formData.service}`,
          from_name: "The Leadership Method Website",
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        setSubmitError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <SectionWrapper id="contact" background="light">
      <div className="text-center mb-12">
        <h2 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
          {contactContent.title}
        </h2>
        <p className="text-brand-charcoal/70 dark:text-night-soft max-w-2xl mx-auto">
          {contactContent.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-6">
              Let&apos;s Connect
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 bg-brand-cream dark:bg-night-raised rounded-lg hover:bg-brand-nude dark:hover:bg-night-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-nude dark:bg-night-muted group-hover:bg-white dark:group-hover:bg-night-border rounded-full flex items-center justify-center transition-colors">
                  <Mail size={24} className="text-brand-charcoal dark:text-night-accent" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-brand-charcoal/60 dark:text-night-soft">Email us at</p>
                  <p className="font-medium text-brand-charcoal dark:text-night-text break-all">{siteConfig.email}</p>
                </div>
                <button
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  className="shrink-0 p-2 rounded-md text-brand-charcoal/40 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent"
                >
                  {copied
                    ? <Check size={16} className="text-green-500" aria-hidden="true" />
                    : <Copy size={16} aria-hidden="true" />
                  }
                </button>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-brand-cream dark:bg-night-raised rounded-lg hover:bg-brand-nude dark:hover:bg-night-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-nude dark:bg-night-muted group-hover:bg-white dark:group-hover:bg-night-border rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={24} className="text-brand-charcoal dark:text-night-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-brand-charcoal/60 dark:text-night-soft">Follow us on Instagram</p>
                  <p className="font-medium text-brand-charcoal dark:text-night-text">
                    {siteConfig.instagramHandle}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-brand-cream dark:bg-night-raised rounded-lg hover:bg-brand-nude dark:hover:bg-night-muted transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-nude dark:bg-night-muted group-hover:bg-white dark:group-hover:bg-night-border rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={24} className="text-brand-charcoal dark:text-night-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-brand-charcoal/60 dark:text-night-soft">Connect on LinkedIn</p>
                  <p className="font-medium text-brand-charcoal dark:text-night-text">
                    The Leadership Method
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-night-raised rounded-lg p-8 shadow-card">
          {isSubmitted ? (
            <div role="status" className="text-center py-12">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-2">
                Message Sent!
              </h3>
              <p className="text-brand-charcoal/70 dark:text-night-soft">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => { setIsSubmitted(false); setSubmitError(null); }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />

              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <Select
                label="Service Interest"
                id="service"
                name="service"
                options={contactContent.serviceOptions}
                value={formData.service}
                onChange={handleChange}
                error={errors.service}
                placeholder="Select a service"
                required
              />

              <Textarea
                label="Message"
                id="message"
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                rows={5}
                required
              />

              {submitError && (
                <p role="alert" className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-md px-4 py-3">
                  {submitError}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} className="mr-2" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
