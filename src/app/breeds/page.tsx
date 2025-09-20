"use client";

import { useState } from "react";
import { BreedCard } from "@/components/breed-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cowBreeds, getBreedsByType } from "@/data/breeds";
import { Search, Filter } from "lucide-react";

export default function BreedsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filteredBreeds, setFilteredBreeds] = useState(cowBreeds);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterBreeds(term, filterType);
  };

  const handleFilter = (type: string) => {
    setFilterType(type);
    filterBreeds(searchTerm, type);
  };

  const filterBreeds = (search: string, type: string) => {
    let breeds = cowBreeds;

    // Filter by type
    if (type !== "all") {
      breeds = getBreedsByType(type);
    }

    // Filter by search term
    if (search) {
      breeds = breeds.filter(breed =>
        breed.name.toLowerCase().includes(search.toLowerCase()) ||
        breed.origin.toLowerCase().includes(search.toLowerCase()) ||
        breed.characteristics.some(char =>
          char.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    setFilteredBreeds(breeds);
  };

  return (
    <main className="min-h-screen pt-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Explore Cow Breeds
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Discover the incredible diversity of cattle breeds from around the world.
            Each breed has been carefully developed for specific purposes and environments.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search breeds, origins, characteristics..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 font-body"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterType} onValueChange={handleFilter}>
                  <SelectTrigger className="w-48 font-body">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Breeds</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="beef">Beef</SelectItem>
                    <SelectItem value="dual purpose">Dual Purpose</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-center">
              <p className="font-body text-muted-foreground">
                Showing {filteredBreeds.length} of {cowBreeds.length} breeds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breeds Grid */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          {filteredBreeds.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredBreeds.map((breed) => (
                <BreedCard key={breed.id} breed={breed} className="animate-fade-in-up" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🐄</div>
                <h3 className="font-heading text-xl font-semibold mb-2">No breeds found</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Try adjusting your search terms or filters to find more breeds.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setFilterType("all");
                    setFilteredBreeds(cowBreeds);
                  }}
                  variant="outline"
                  className="font-body"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Breed Types Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Understanding Cattle Types</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Cattle breeds are generally classified into three main categories based on their primary purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥛</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Dairy Breeds</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Specialized for milk production with high yields and excellent milk quality.
                Examples include Holstein, Jersey, and Guernsey.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥩</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Beef Breeds</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Developed for meat production with superior muscle development and feed efficiency.
                Examples include Angus, Hereford, and Charolais.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Dual Purpose</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Versatile breeds suitable for both milk and meat production.
                Examples include Simmental, Brown Swiss, and Shorthorn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}