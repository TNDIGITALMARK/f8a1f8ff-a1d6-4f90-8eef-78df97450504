"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cowFacts, getFactsByCategory, getRandomFacts, factCategories, CowFact } from "@/data/facts";
import { Shuffle, Heart, Brain, Zap } from "lucide-react";

export default function FactsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayedFacts, setDisplayedFacts] = useState(cowFacts);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setDisplayedFacts(cowFacts);
    } else {
      setDisplayedFacts(getFactsByCategory(category));
    }
  };

  const handleRandomize = () => {
    setDisplayedFacts(getRandomFacts(12));
    setSelectedCategory("random");
  };

  const toggleFavorite = (factId: string) => {
    setFavorites(prev =>
      prev.includes(factId)
        ? prev.filter(id => id !== factId)
        : [...prev, factId]
    );
  };

  const getFunLevelColor = (level: 1 | 2 | 3) => {
    switch (level) {
      case 1: return "bg-blue-100 text-blue-800 border-blue-200";
      case 2: return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 3: return "bg-red-100 text-red-800 border-red-200";
    }
  };

  const getFunLevelText = (level: 1 | 2 | 3) => {
    switch (level) {
      case 1: return "Interesting";
      case 2: return "Surprising";
      case 3: return "Amazing";
    }
  };

  const getFunLevelIcon = (level: 1 | 2 | 3) => {
    switch (level) {
      case 1: return <Brain className="h-3 w-3" />;
      case 2: return <Zap className="h-3 w-3" />;
      case 3: return <Heart className="h-3 w-3" />;
    }
  };

  return (
    <main className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Amazing Cow Facts
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Discover fascinating, surprising, and delightful facts about cows.
            From their incredible intelligence to their unique abilities, there's so much to learn!
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">{cowFacts.length}+</div>
              <div className="text-sm text-muted-foreground font-body">Amazing Facts</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">{factCategories.length}</div>
              <div className="text-sm text-muted-foreground font-body">Categories</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground font-body">Fun Levels</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary">{favorites.length}</div>
              <div className="text-sm text-muted-foreground font-body">Your Favorites</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full">
            {/* Category Tabs */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-64 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-lg font-semibold">Categories</h2>
                  <Button
                    onClick={handleRandomize}
                    variant="outline"
                    size="sm"
                    className="font-body"
                  >
                    <Shuffle className="h-4 w-4 mr-1" />
                    Random
                  </Button>
                </div>

                <TabsList className="flex flex-col h-auto space-y-1 bg-transparent">
                  <TabsTrigger
                    value="all"
                    className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-body"
                  >
                    All Facts ({cowFacts.length})
                  </TabsTrigger>
                  {factCategories.map((category) => {
                    const count = getFactsByCategory(category).length;
                    return (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-body"
                      >
                        {category} ({count})
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>

              {/* Facts Content */}
              <div className="flex-1">
                <TabsContent value={selectedCategory} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedFacts.map((fact) => (
                      <Card
                        key={fact.id}
                        className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-2">
                            <div className="text-3xl mb-2">{fact.icon}</div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-red-500 p-1"
                              onClick={() => toggleFavorite(fact.id)}
                            >
                              <Heart
                                className={`h-4 w-4 ${
                                  favorites.includes(fact.id)
                                    ? "fill-red-500 text-red-500"
                                    : ""
                                }`}
                              />
                            </Button>
                          </div>
                          <CardTitle className="font-heading text-lg leading-tight">
                            {fact.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {fact.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="font-body text-xs"
                            >
                              {fact.category}
                            </Badge>
                            <Badge
                              className={`font-body text-xs flex items-center gap-1 ${getFunLevelColor(fact.funLevel)}`}
                            >
                              {getFunLevelIcon(fact.funLevel)}
                              {getFunLevelText(fact.funLevel)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {displayedFacts.length === 0 && (
                    <div className="text-center py-16">
                      <div className="text-6xl mb-4">🤔</div>
                      <h3 className="font-heading text-xl font-semibold mb-2">No facts found</h3>
                      <p className="font-body text-muted-foreground">
                        Try selecting a different category.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Fun Level Guide */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">Fun Level Guide</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Each fact is rated based on how surprising or amazing it is.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-heading text-lg font-semibold text-blue-800 mb-2">
                Interesting
              </h3>
              <p className="font-body text-sm text-blue-700">
                Basic facts that are good to know about cows.
              </p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-heading text-lg font-semibold text-yellow-800 mb-2">
                Surprising
              </h3>
              <p className="font-body text-sm text-yellow-700">
                Facts that might surprise you about cow behavior and abilities.
              </p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-heading text-lg font-semibold text-red-800 mb-2">
                Amazing
              </h3>
              <p className="font-body text-sm text-red-700">
                Mind-blowing facts that will make you see cows in a new light!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}