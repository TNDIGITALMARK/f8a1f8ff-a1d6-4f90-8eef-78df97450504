import { HeroBanner } from "@/components/hero-banner";
import { BreedCard } from "@/components/breed-card";
import { Button } from "@/components/ui/button";
import { cowBreeds } from "@/data/breeds";
import { getRandomFacts } from "@/data/facts";
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default function HomePage() {
  // Get featured breeds for homepage (first 3)
  const featuredBreeds = cowBreeds.slice(0, 3);

  // Get random facts for preview
  const randomFacts = getRandomFacts(3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        title="Welcome to the Pasture"
        subtitle="COWSDOM - Your Bovine Gateway"
        description="Step into the heartwarming world of cattle where every moo tells a story. From the rolling green pastures to the barn, discover the rich heritage, diverse breeds, and fascinating facts that make these gentle giants so remarkable. Your agricultural adventure begins here."
        buttonText="Explore the Herd"
        buttonHref="/breeds"
        backgroundImage="/generated/hero-cow-field.jpg"
      />

      {/* Featured Breeds Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Our Heritage
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Diverse <span className="text-primary">Breeds</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the amazing diversity of cattle breeds from around the world. Each breed has unique characteristics, purposes, and fascinating histories that span centuries of agricultural tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="font-body shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/breeds">
                View All Breeds
                <span className="ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-muted/10 relative">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] bg-[length:60px_60px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="font-body text-sm font-semibold text-accent-foreground uppercase tracking-widest bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
                Fun Knowledge
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Amazing <span className="text-accent-foreground">Cow Facts</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Did you know cows have best friends and can live up to 25 years? Discover surprising and delightful facts about these incredible animals that will change how you see our bovine companions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {randomFacts.map((fact, index) => (
              <div
                key={fact.id}
                className={`bg-card p-6 rounded-lg border border-border hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl mb-3">{fact.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                  {fact.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {fact.description}
                </p>
                <div className="mt-3">
                  <span className="font-body text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    {fact.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="font-body border-2 hover:bg-accent/10 hover:border-accent/50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/facts">
                Discover More Facts
                <span className="ml-2">🧠</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-20 h-20 border-2 border-primary-foreground rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-16 h-16 border border-primary-foreground rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-12 h-12 bg-primary-foreground rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="font-body text-sm font-semibold text-primary-foreground/90 uppercase tracking-widest bg-primary-foreground/10 px-4 py-2 rounded-full border border-primary-foreground/20">
                Community
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-primary-foreground/90">Community</span>
            </h2>
            <p className="font-body text-xl opacity-95 max-w-3xl mx-auto mb-10 leading-relaxed">
              Connect with fellow cow enthusiasts, share your experiences, and stay updated with the latest from the world of cattle. Be part of a growing community that celebrates agricultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-body text-lg px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/gallery">
                  View Gallery
                  <span className="ml-2">📸</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-body text-lg px-8 py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/about">
                  Learn More
                  <span className="ml-2">📚</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}