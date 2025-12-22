import { 
  CheckCircle2, 
  Clock, 
  Truck, 
  XCircle,
  Search,
  Filter,
  MoreVertical,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

const API_KEY = "YOUR_API_KEY_HERE";

const donations = [
  {
    id: "DON-001",
    donor: "Green Valley Restaurant",
    receiver: "Hope Foundation",
    food: "Biryani (50 servings)",
    date: "2024-01-15",
    status: "delivered",
  },
  {
    id: "DON-002",
    donor: "City Fresh Market",
    receiver: "Smile NGO",
    food: "Fresh Vegetables (25 kg)",
    date: "2024-01-15",
    status: "in_transit",
  },
  {
    id: "DON-003",
    donor: "ABC Caterers",
    receiver: "Care Home",
    food: "Lunch Packets (100 pcs)",
    date: "2024-01-15",
    status: "pending",
  },
  {
    id: "DON-004",
    donor: "Sunrise Hotels",
    receiver: "Child Welfare Trust",
    food: "Breakfast Meals (80 servings)",
    date: "2024-01-14",
    status: "approved",
  },
  {
    id: "DON-005",
    donor: "Fresh Farms",
    receiver: "Street Food Project",
    food: "Fruits & Vegetables (40 kg)",
    date: "2024-01-14",
    status: "delivered",
  },
  {
    id: "DON-006",
    donor: "Royal Bakery",
    receiver: "Senior Care Center",
    food: "Bread & Pastries (200 pcs)",
    date: "2024-01-14",
    status: "cancelled",
  },
  {
    id: "DON-007",
    donor: "Metro Supermart",
    receiver: "Hope Foundation",
    food: "Packaged Food Items",
    date: "2024-01-13",
    status: "delivered",
  },
  {
    id: "DON-008",
    donor: "Spice Garden Restaurant",
    receiver: "Smile NGO",
    food: "Dinner Meals (60 servings)",
    date: "2024-01-13",
    status: "in_transit",
  },
];

const statusConfig = {
  pending: {
    label: "Pending",
    icon: Clock,
    className: "bg-warning/10 text-warning border-warning/20",
  },
  approved: {
    label: "Approved",
    icon: CheckCircle2,
    className: "bg-primary/10 text-primary border-primary/20",
  },
  in_transit: {
    label: "In Transit",
    icon: Truck,
    className: "bg-accent/10 text-accent border-accent/20",
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/20",
  },
  cancelled: {
    label: "Cancelled",
    icon: XCircle,
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

const stats = [
  { label: "Total Donations", value: "1,234", change: "+12%" },
  { label: "Pending Approval", value: "23", change: "-5%" },
  { label: "In Transit", value: "45", change: "+8%" },
  { label: "Delivered Today", value: "89", change: "+15%" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <SectionHeader
            title="Admin Monitoring"
            subtitle="Track and manage all food donations across the platform."
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl border border-border p-4 shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className={`text-xs font-medium ${
                  stat.change.startsWith("+") ? "text-success" : "text-destructive"
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-card rounded-2xl border border-border shadow-soft mb-6">
          <div className="p-4 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by donor, receiver, or donation ID..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="default">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="default">
                Export
              </Button>
            </div>
          </div>

          {/* Status Filters */}
          <div className="px-4 pb-4 flex flex-wrap gap-2">
            <Button variant="default" size="sm">All</Button>
            {Object.entries(statusConfig).map(([key, config]) => (
              <Button key={key} variant="outline" size="sm">
                <config.icon className="h-3 w-3 mr-1" />
                {config.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-card rounded-2xl border border-border shadow-soft overflow-hidden animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">ID</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Donor</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Receiver</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Food Item</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => {
                  const status = statusConfig[donation.status as keyof typeof statusConfig];
                  return (
                    <tr key={donation.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                      <td className="p-4">
                        <span className="text-sm font-medium text-primary">{donation.id}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{donation.donor}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm">{donation.receiver}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-muted-foreground">{donation.food}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-muted-foreground">{donation.date}</span>
                      </td>
                      <td className="p-4">
                        <Badge variant="outline" className={status.className}>
                          <status.icon className="h-3 w-3 mr-1" />
                          {status.label}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-border flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing 1-8 of 1,234 donations
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
