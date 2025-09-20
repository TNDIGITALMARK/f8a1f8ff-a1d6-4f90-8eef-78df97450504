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
        title="Discover the World of Cows"
        subtitle="Welcome to COWSDOM"
        description="Explore fascinating cow breeds, learn amazing facts, and discover the incredible world of cattle. From dairy to beef, from Highland to Holstein - your bovine journey starts here."
        buttonText="Learn More"
        buttonHref="/breeds"
        backgroundImage="/generated/hero-cow-field.jpg"
      />

      {/* Featured Breeds Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diverse Breeds
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the amazing diversity of cattle breeds from around the world. Each breed has unique characteristics, purposes, and fascinating histories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredBreeds.map((breed) => (
              <BreedCard key={breed.id} breed={breed} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="font-body">
              <Link href="/breeds">
                View All Breeds
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Amazing Cow Facts
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Did you know cows have best friends? Discover surprising and delightful facts about these incredible animals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {randomFacts.map((fact) => (
              <div
                key={fact.id}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow animate-fade-in-up"
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
            <Button asChild size="lg" variant="outline" className="font-body">
              <Link href="/facts">
                Discover More Facts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="font-body text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Connect with fellow cow enthusiasts, share your experiences, and stay updated with the latest from the world of cattle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-body"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-body border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}