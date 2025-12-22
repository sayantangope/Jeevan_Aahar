import { SectionHeader } from "@/components/ui/section-header";
import { RequestWizard } from "@/components/request/RequestWizard";
import { CheckCircle2, Clock, Heart, Users } from "lucide-react";

// Placeholder for API integration
const API_KEY = "YOUR_API_KEY_HERE";

export default function RequestsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Get Food Assistance
          </span>
          <SectionHeader
            title="Request Food"
            subtitle="Organizations and individuals in need can request food assistance. We'll match you with donors."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Wizard */}
          <div className="lg:col-span-3">
            <RequestWizard />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* How It Works */}
            <div className="bg-card rounded-2xl border border-border shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-4">How It Works</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Submit Request</p>
                    <p className="text-muted-foreground">Fill in your food requirements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Get Matched</p>
                    <p className="text-muted-foreground">We find available donors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Receive Food</p>
                    <p className="text-muted-foreground">Volunteers deliver to you</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="bg-accent/5 rounded-2xl border border-accent/20 p-6">
              <h3 className="text-lg font-semibold text-accent mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <div>
                    <p className="text-2xl font-bold">3,280</p>
                    <p className="text-xs text-muted-foreground">Requests Fulfilled</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-info" />
                  <div>
                    <p className="text-2xl font-bold">&lt; 2 hrs</p>
                    <p className="text-xs text-muted-foreground">Avg. Response Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">8,500+</p>
                    <p className="text-xs text-muted-foreground">Families Helped</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Need Urgent Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For emergency food assistance, call us directly.
              </p>
              <p className="font-medium">📞 +91 98765 43210</p>
              <p className="text-xs text-muted-foreground mt-2">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}