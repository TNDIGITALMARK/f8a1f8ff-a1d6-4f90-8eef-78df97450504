"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export interface BreedData {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  origin: string;
  characteristics: string[];
  temperament: string;
  averageWeight: string;
  milkProduction?: string;
  primaryUse: string;
}

interface BreedCardProps {
  breed: BreedData;
  className?: string;
}

export function BreedCard({ breed, className = "" }: BreedCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`group perspective-1000 ${className}`}>
      <Card
        className="relative w-full h-96 cursor-pointer transition-transform duration-700 transform-style-preserve-3d hover:scale-105"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <CardContent className="p-0 h-full relative overflow-hidden rounded-lg">
            <div className="relative h-64">
              <Image
                src={breed.image}
                alt={`${breed.name} cow breed`}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-heading text-xl font-bold">{breed.name}</h3>
                <p className="font-body text-sm opacity-90">Origin: {breed.origin}</p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {breed.shortDescription}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-body text-xs text-primary font-semibold uppercase tracking-wide">
                  {breed.primaryUse}
                </span>
                <div className="text-xs text-muted-foreground font-body">
                  Click to flip
                </div>
              </div>
            </div>
          </CardContent>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <CardContent className="p-6 h-full flex flex-col justify-between bg-card">
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-center text-primary">
                {breed.name}
              </h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                    Temperament
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">{breed.temperament}</p>
                </div>

                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                    Characteristics
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {breed.characteristics.map((char, index) => (
                      <span
                        key={index}
                        className="font-body text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-body font-medium">Weight:</span>
                    <span className="font-body text-muted-foreground">{breed.averageWeight}</span>
                  </div>
                  {breed.milkProduction && (
                    <div className="flex justify-between">
                      <span className="font-body font-medium">Milk:</span>
                      <span className="font-body text-muted-foreground">{breed.milkProduction}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 font-body text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href={`/breeds/${breed.id}`}>Learn More</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="font-body text-xs px-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
              >
                Flip Back
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

// Add custom CSS for 3D transforms
const style = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
`;

export const BreedCardStyles = () => (
  <style jsx global>{style}</style>
);