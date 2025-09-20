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
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: backgroundImage.startsWith('/')
            ? `url(${backgroundImage})`
            : `url(/hero-cow-field.jpg)`
        }}
      >
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/10"></div>
      </div>

      {/* Floating elements for atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {subtitle && (
            <div className="inline-block">
              <p className="font-body text-lg font-semibold text-white/95 uppercase tracking-widest bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
                {subtitle}
              </p>
            </div>
          )}

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-shadow-lg">
            <span className="block bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            {description}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="font-body text-lg px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary hover:border-primary/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
            >
              <Link href={buttonHref}>
                {buttonText}
                <span className="ml-2">🐄</span>
              </Link>
            </Button>

            <div className="flex items-center space-x-2 text-white/80 font-body text-sm">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-white/30"></div>
                <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white/30"></div>
                <div className="w-8 h-8 bg-primary rounded-full border-2 border-white/30"></div>
              </div>
              <span className="text-sm">Join thousands of bovine enthusiasts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

      {/* Subtle border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-accent/70 to-secondary/50"></div>
    </section>
  );
}