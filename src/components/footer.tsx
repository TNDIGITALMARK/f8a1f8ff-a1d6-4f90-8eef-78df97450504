import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail, Heart } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "All Breeds", href: "/breeds" },
    { name: "Dairy Cows", href: "/breeds?filter=dairy" },
    { name: "Beef Cattle", href: "/breeds?filter=beef" },
    { name: "Dual Purpose", href: "/breeds?filter=dual-purpose" },
  ],
  learn: [
    { name: "Cow Facts", href: "/facts" },
    { name: "Care Guide", href: "/care" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "About Cows", href: "/about" },
  ],
  community: [
    { name: "Join Community", href: "/community" },
    { name: "Share Photos", href: "/gallery/upload" },
    { name: "Farm Directory", href: "/farms" },
    { name: "Events", href: "/events" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Stay Connected with COWSDOM
            </h3>
            <p className="font-body text-background/80 mb-6">
              Get the latest cow facts, breed spotlights, and farm stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </div>
            <p className="font-body text-xs text-background/60 mt-3">
              No spam, just cow-some content! Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🐄</span>
              </div>
              <span className="font-heading text-xl font-bold">COWSDOM</span>
            </div>
            <p className="font-body text-background/80 text-sm leading-relaxed mb-4">
              Your ultimate resource for everything about cows. Discover breeds, learn fascinating facts,
              and connect with the amazing world of cattle.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/60 hover:text-background hover:bg-background/10"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wide">
              Learn
            </h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wide">
              Community
            </h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-body text-sm text-background/60">
                © 2025 COWSDOM. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-body text-sm text-background/60 flex items-center justify-center md:justify-end gap-1">
                Made with <Heart className="h-3 w-3 text-red-400 fill-current" /> for cow lovers everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}