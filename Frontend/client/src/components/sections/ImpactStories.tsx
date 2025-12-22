import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote: "Jeevan Aahar made it incredibly easy for us to donate our surplus food every day. Knowing that our excess food is reaching families in need instead of going to waste gives us immense satisfaction.",
    meals: "2,500+",
  },
  {
    name: "Rajesh Kumar",
    role: "Community Volunteer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "As a volunteer, I've seen firsthand how this platform changes lives. The gratitude in people's eyes when they receive a warm meal is priceless. This is humanity at its best.",
    meals: "500+",
  },
  {
    name: "Anita Desai",
    role: "NGO Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "Partnering with Jeevan Aahar has doubled our capacity to serve the underprivileged. The seamless coordination and real-time tracking make food distribution so much more efficient.",
    meals: "10,000+",
  },
];

const communityHighlights = [
  { label: "Active Donors", value: "2,500+" },
  { label: "Partner NGOs", value: "45+" },
  { label: "Cities Covered", value: "12" },
  { label: "Volunteers", value: "800+" },
];

export function ImpactStories() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Real Stories, Real Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voices from Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every donation creates a ripple effect of kindness. Here's what our community has to say.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative overflow-hidden border-border hover:border-primary/30 transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Quote Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{testimonial.meals}</p>
                    <p className="text-xs text-muted-foreground">meals shared</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Highlights */}
        <div className="bg-card rounded-2xl border border-border shadow-soft p-8">
          <h3 className="text-xl font-semibold text-center mb-8">
            Our Growing <span className="text-primary">Community</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityHighlights.map((item, index) => (
              <div 
                key={item.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}