import { 
  Utensils, 
  CheckCircle2, 
  Clock,
  Package,
  Heart,
  TrendingUp,
  MapPin,
  Calendar,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const donorStats = [
  { label: "Total Donations", value: "24", icon: Package, color: "primary" },
  { label: "Meals Shared", value: "1,250", icon: Utensils, color: "success" },
  { label: "Families Fed", value: "180", icon: Heart, color: "accent" },
  { label: "This Month", value: "5", icon: Calendar, color: "info" },
];

const recentDonations = [
  {
    id: 1,
    food: "Vegetable Biryani",
    quantity: "15 kg",
    date: "Dec 20, 2024",
    status: "Delivered",
    recipient: "Hope Foundation",
    image: "🍛",
  },
  {
    id: 2,
    food: "Fresh Fruits",
    quantity: "10 kg",
    date: "Dec 18, 2024",
    status: "In Transit",
    recipient: "Child Welfare Trust",
    image: "🍎",
  },
  {
    id: 3,
    food: "Packed Meals",
    quantity: "50 packets",
    date: "Dec 15, 2024",
    status: "Delivered",
    recipient: "Street Food Project",
    image: "📦",
  },
  {
    id: 4,
    food: "Rice & Dal",
    quantity: "25 kg",
    date: "Dec 12, 2024",
    status: "Delivered",
    recipient: "Senior Care Center",
    image: "🍚",
  },
];

const statusStyles = {
  "Delivered": "bg-success/10 text-success border-success/20",
  "In Transit": "bg-accent/10 text-accent border-accent/20",
  "Pending": "bg-warning/10 text-warning border-warning/20",
};

export function DonorDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, Donor! 👋</h2>
          <p className="text-muted-foreground">Thank you for making a difference in your community.</p>
        </div>
        <Button className="gradient-hero border-0" asChild>
          <Link to="/donate">
            <Package className="mr-2 h-4 w-4" />
            New Donation
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {donorStats.map((stat, index) => (
          <Card key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-${stat.color}/10`}>
                  <stat.icon className={`h-5 w-5 text-${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Impact Summary */}
      <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Your Impact is Growing! 🌱</h3>
              <p className="text-muted-foreground text-sm">
                You've increased your donations by <span className="text-primary font-bold">25%</span> this month. 
                Keep up the amazing work!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Donations */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Recent Donations</CardTitle>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDonations.map((donation) => (
              <div
                key={donation.id}
                className="flex items-center gap-4 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="text-3xl">{donation.image}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium truncate">{donation.food}</p>
                    <Badge variant="outline" className={statusStyles[donation.status as keyof typeof statusStyles]}>
                      {donation.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {donation.quantity} • {donation.recipient}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{donation.date}</p>
                  <Button variant="ghost" size="sm" className="h-7 px-2">
                    <Eye className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Donate Food", icon: Package, to: "/donate", color: "primary" },
          { label: "Track Pickups", icon: MapPin, to: "/dashboard", color: "accent" },
          { label: "View Impact", icon: TrendingUp, to: "/dashboard", color: "success" },
          { label: "History", icon: Clock, to: "/dashboard", color: "info" },
        ].map((action) => (
          <Link
            key={action.label}
            to={action.to}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-${action.color}/50 hover:shadow-soft transition-all`}
          >
            <action.icon className={`h-6 w-6 text-${action.color}`} />
            <span className="text-sm font-medium">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}