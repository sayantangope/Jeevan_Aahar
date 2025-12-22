import { SectionHeader } from "@/components/ui/section-header";
import { DonorDashboard } from "@/components/dashboard/DonorDashboard";

// Placeholder for API integration
const API_KEY = "YOUR_API_KEY_HERE";

export default function DonateDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SectionHeader
            title="Donor Dashboard"
            subtitle="Track your donations and see the impact you're making."
          />
        </div>
        <DonorDashboard />
      </div>
    </div>
  );
}