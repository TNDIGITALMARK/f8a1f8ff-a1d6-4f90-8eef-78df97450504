import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import { PhoenixTracker } from "@/components/PhoenixTracker";
export const metadata: Metadata = {
  title: "COWSDOM - Discover the World of Cows",
  description: "Explore fascinating cow breeds, learn amazing facts, and discover the incredible world of cattle. Your ultimate resource for all things bovine.",
  keywords: ["cows", "cattle", "breeds", "dairy", "beef", "facts", "farming", "agriculture"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider>
              <Navigation />
              {children}
              <Footer />
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>        <PhoenixTracker />        <PhoenixTracker />


      </body>
    </html>
  );
}
