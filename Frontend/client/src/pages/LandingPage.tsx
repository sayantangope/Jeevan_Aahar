import { Link } from "react-router-dom";
import { Heart, ArrowRight, Users, Utensils, Building2, TrendingUp, Truck, ShieldCheck, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { ImpactStories } from "@/components/sections/ImpactStories";
import heroImage from "@/assets/hero-image.jpg";

// Placeholder for API integration
const API_KEY = "YOUR_API_KEY_HERE";

const impactStats = [
  {
    title: "Meals Donated",
    value: "125,000+",
    icon: Utensils,
    description: "Nutritious meals shared with families",
    variant: "primary" as const,
  },
  {
    title: "Families Helped",
    value: "8,500+",
    icon: Users,
    description: "Lives touched through your generosity",
    variant: "success" as const,
  },
  {
    title: "Partner NGOs",
    value: "45+",
    icon: Building2,
    description: "Organizations working together",
    variant: "accent" as const,
  },
  {
    title: "Food Saved (kg)",
    value: "50,000+",
    icon: TrendingUp,
    description: "Reducing waste, feeding lives",
    variant: "default" as const,
  },
];

const features = [
  {
    title: "Easy Donations",
    description: "Share your excess food in just a few clicks. We handle the pickup and delivery.",
    icon: Utensils,
  },
  {
    title: "Real-time Tracking",
    description: "Track your donations from pickup to delivery. Transparency you can trust.",
    icon: Truck,
  },
  {
    title: "Verified Partners",
    description: "We partner with verified NGOs to ensure food reaches those who need it most.",
    icon: ShieldCheck,
  },
  {
    title: "Quick Response",
    description: "Our volunteers respond within 30 minutes to collect your donations.",
    icon: Clock,
  },
];

const userTypes = [
  {
    title: "For Donors",
    description: "Restaurants, caterers, households with surplus food",
    steps: ["List your food", "Schedule pickup", "Track delivery"],
    color: "primary",
  },
  {
    title: "For Volunteers",
    description: "Help collect and deliver food to those in need",
    steps: ["View pickups", "Claim a route", "Make deliveries"],
    color: "accent",
  },
  {
    title: "For NGOs",
    description: "Organizations serving the underprivileged",
    steps: ["Request food", "Receive donations", "Distribute meals"],
    color: "info",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Community sharing food together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">
                Join 2,500+ donors making a difference
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              A Meal. A Smile.{" "}
              <span className="text-primary">A Life.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Jeevan Aahar connects those with surplus food to those in need. 
              Together, we can fight hunger and reduce food waste in our communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gradient-hero border-0 text-lg h-14 px-8" asChild>
                <Link to="/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Food
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 h-14 px-8 text-lg backdrop-blur-sm"
                asChild
              >
                <Link to="/requests">
                  Request Food
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-6">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">125K+</p>
                <p className="text-sm text-primary-foreground/70">Meals Donated</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent">45+</p>
                <p className="text-sm text-primary-foreground/70">Partner NGOs</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-info">12</p>
                <p className="text-sm text-primary-foreground/70">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - For All User Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-primary">It Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're a donor, volunteer, or NGO, getting started is easy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <div 
                key={type.title}
                className="relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${
                  type.color === "primary" ? "gradient-hero" :
                  type.color === "accent" ? "gradient-warm" : "gradient-blue"
                }`}>
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                <ol className="space-y-2">
                  {type.steps.map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        type.color === "primary" ? "bg-primary/10 text-primary" :
                        type.color === "accent" ? "bg-accent/10 text-accent" : "bg-info/10 text-info"
                      }`}>
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats - Animated */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Making Real Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Impact</span> in Numbers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every donation creates ripples of change. Here's what we've achieved together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={stat.title} className="animate-fade-in animate-count-up" style={{ animationDelay: `${index * 100}ms` }}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-info/10 text-info text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-primary">Jeevan Aahar</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're more than a platform. We're a community united against hunger.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <ImpactStories />
      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Join thousands of donors and volunteers who are fighting hunger one meal at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-14 px-8 text-lg"
                asChild
              >
                <Link to="/donate">
                  Start Donating Today
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 text-lg"
                asChild
              >
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}