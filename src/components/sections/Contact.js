"use client";

import { useState } from "react";
import { Mail, Instagram, Linkedin, Send, CheckCircle } from "lucide-react";
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
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
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
          {contactContent.title}
        </h2>
        <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
          {contactContent.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-brand-charcoal mb-6">
              Let&apos;s Connect
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 bg-brand-cream rounded-lg hover:bg-brand-nude transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-nude group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <Mail size={24} className="text-brand-charcoal" />
                </div>
                <div>
                  <p className="text-sm text-brand-charcoal/60">Email us at</p>
                  <p className="font-medium text-brand-charcoal">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-brand-cream rounded-lg hover:bg-brand-nude transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-nude group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={24} className="text-brand-charcoal" />
                </div>
                <div>
                  <p className="text-sm text-brand-charcoal/60">Follow us on Instagram</p>
                  <p className="font-medium text-brand-charcoal">
                    {siteConfig.instagramHandle}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-brand-cream rounded-lg hover:bg-brand-nude transition-colors group"
              >
                <div className="w-12 h-12 bg-brand-nude group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={24} className="text-brand-charcoal" />
                </div>
                <div>
                  <p className="text-sm text-brand-charcoal/60">Connect on LinkedIn</p>
                  <p className="font-medium text-brand-charcoal">
                    The Leadership Method
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-brand-charcoal mb-2">
                Message Sent!
              </h3>
              <p className="text-brand-charcoal/70">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setIsSubmitted(false)}
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
                    <Send size={18} className="mr-2" />
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
