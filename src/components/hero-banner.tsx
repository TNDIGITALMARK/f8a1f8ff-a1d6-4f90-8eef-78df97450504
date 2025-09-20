"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage?: string;
}

export function HeroBanner({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  backgroundImage = "/currentImgContext/ai-generated-preview.png"
}: HeroBannerProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage.startsWith('/')
            ? `url(${backgroundImage})`
            : `url(/hero-cow-field.jpg)`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          {subtitle && (
            <p className="font-body text-lg font-medium text-white/90 uppercase tracking-wider">
              {subtitle}
            </p>
          )}

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {title}
          </h1>

          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="font-body text-base px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:border-primary/90 transition-all duration-300"
            >
              <Link href={buttonHref}>
                {buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent"></div>
    </section>
  );
}