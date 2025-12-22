import { SectionHeader } from "@/components/ui/section-header";
import { RecipientDashboard } from "@/components/dashboard/RecipientDashboard";

// Placeholder for API integration
const API_KEY = "YOUR_API_KEY_HERE";

export default function RequestDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SectionHeader
            title="Recipient Dashboard"
            subtitle="Manage your food requests and track deliveries."
          />
        </div>
        <RecipientDashboard />
      </div>
    </div>
  );
}