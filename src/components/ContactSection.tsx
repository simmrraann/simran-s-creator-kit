import { Mail, Instagram, Phone, ExternalLink } from "lucide-react";
import { Sparkle } from "./Sparkle";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-gold/30">
        <Sparkle size="lg" />
      </div>
      <div className="absolute bottom-20 right-20 text-primary/30">
        <Sparkle size="lg" />
      </div>
      <div className="absolute top-1/2 right-10 text-gold/20">
        <Sparkle size="md" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="font-handwriting text-3xl text-gold">ready to collaborate? ✨</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-4 mb-4">
            Let's Create Together
          </h2>
          <span className="font-handwriting text-xl text-[hsl(25_80%_75%)] block mb-8">can't wait to hear from you! 💌</span>
          <p className="text-secondary-foreground/80 text-lg mb-12 max-w-xl mx-auto">
            I'd love to help you create your next high-converting campaign. Let's chat about how we can work together!
          </p>

          {/* Contact options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:simmraannsinghh@gmail.com"
              className="group flex flex-col items-center p-6 rounded-2xl bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-medium">Email</span>
              <span className="text-sm text-secondary-foreground/70 mt-1">simmraannsinghh@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/failing_vlogs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-2xl bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-medium">Instagram</span>
              <span className="text-sm text-secondary-foreground/70 mt-1">@failing_vlogs</span>
            </a>

            <a
              href="https://wa.me/918999393617"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-2xl bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium">WhatsApp</span>
              <span className="text-sm text-secondary-foreground/70 mt-1">+91 8999393617</span>
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:simmraannsinghh@gmail.com?subject=Collaboration%20Inquiry"
            className="inline-flex items-center gap-3 bg-gold text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-glow transition-all duration-300"
          >
            Start a Conversation <ExternalLink className="w-5 h-5" />
          </a>

          {/* Footer note */}
          <p className="mt-16 text-secondary-foreground/60 text-sm">
            © 2025 Simran • Media Kit
          </p>
        </div>
      </div>
    </section>
  );
};
