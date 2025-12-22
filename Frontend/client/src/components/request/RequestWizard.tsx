import { useState, useRef } from "react";
import { Check, ChevronLeft, ChevronRight, MapPin, Clock, Package, Users, User, Phone, Send, CheckCircle2, Building2, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Organization", icon: Building2 },
  { id: 2, title: "Food Needed", icon: Package },
  { id: 3, title: "Delivery", icon: MapPin },
  { id: 4, title: "Contact", icon: User },
];

const foodNeeds = [
  { id: "meals", label: "Cooked Meals", icon: "🍛", description: "Ready-to-eat food" },
  { id: "groceries", label: "Groceries", icon: "🛒", description: "Raw ingredients" },
  { id: "packaged", label: "Packaged Food", icon: "📦", description: "Non-perishables" },
  { id: "beverages", label: "Beverages", icon: "🥤", description: "Drinks & water" },
  { id: "baby", label: "Baby Food", icon: "🍼", description: "Infant nutrition" },
  { id: "special", label: "Special Diet", icon: "🥗", description: "Dietary requirements" },
];

const urgencyLevels = [
  { id: "urgent", label: "Urgent", description: "Need within 2-4 hours", color: "destructive" },
  { id: "today", label: "Today", description: "Need by end of day", color: "warning" },
  { id: "flexible", label: "Flexible", description: "Within next few days", color: "success" },
];

interface FormData {
  orgName: string;
  orgType: string;
  beneficiaries: string;
  foodType: string;
  quantity: string;
  urgency: string;
  specificNeeds: string;
  address: string;
  landmark: string;
  preferredTime: string;
  contactName: string;
  phone: string;
  email: string;
  notes: string;
}

export function RequestWizard() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    orgName: "",
    orgType: "",
    beneficiaries: "",
    foodType: "",
    quantity: "",
    urgency: "",
    specificNeeds: "",
    address: "",
    landmark: "",
    preferredTime: "",
    contactName: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImages(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    toast({
      title: "Request Submitted! 🎉",
      description: "We'll match you with available donors shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="text-center space-y-6 animate-scale-in max-w-md">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-success/10 mx-auto">
            <CheckCircle2 className="h-12 w-12 text-success" />
          </div>
          <h2 className="text-3xl font-bold">Request Received! 🫶</h2>
          <p className="text-muted-foreground">
            Your food request has been submitted successfully. We're matching you with available donors and will notify you soon.
          </p>
          <div className="bg-secondary/50 rounded-xl p-4 text-left">
            <h4 className="font-semibold mb-2">Request Summary</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">Organization:</span> {formData.orgName}</p>
              <p><span className="font-medium text-foreground">Food Needed:</span> {formData.quantity}</p>
              <p><span className="font-medium text-foreground">Beneficiaries:</span> {formData.beneficiaries} people</p>
            </div>
          </div>
          <Button onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({ orgName: "", orgType: "", beneficiaries: "", foodType: "", quantity: "", urgency: "", specificNeeds: "", address: "", landmark: "", preferredTime: "", contactName: "", phone: "", email: "", notes: "" }); }} className="gradient-hero border-0">
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                  currentStep > step.id 
                    ? "bg-primary border-primary" 
                    : currentStep === step.id 
                      ? "border-primary bg-primary/10" 
                      : "border-border bg-background"
                }`}>
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5 text-primary-foreground" />
                  ) : (
                    <step.icon className={`h-5 w-5 ${currentStep === step.id ? "text-primary" : "text-muted-foreground"}`} />
                  )}
                </div>
                <span className={`mt-2 text-xs font-medium ${currentStep >= step.id ? "text-primary" : "text-muted-foreground"}`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-full h-0.5 mx-2 ${currentStep > step.id ? "bg-primary" : "bg-border"}`} style={{ width: "60px" }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className="border-border shadow-soft">
        <CardContent className="p-6 md:p-8">
          {/* Step 1: Organization */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Tell us about your organization</h3>
                <p className="text-muted-foreground">Help us understand who we're helping.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name *</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="orgName"
                      placeholder="e.g., Hope Foundation"
                      className="pl-10"
                      value={formData.orgName}
                      onChange={(e) => updateFormData("orgName", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgType">Type of Organization</Label>
                  <Input
                    id="orgType"
                    placeholder="e.g., NGO, Shelter, Community Kitchen"
                    value={formData.orgType}
                    onChange={(e) => updateFormData("orgType", e.target.value)}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="beneficiaries">Number of Beneficiaries *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="beneficiaries"
                      type="number"
                      placeholder="How many people will this help?"
                      className="pl-10"
                      value={formData.beneficiaries}
                      onChange={(e) => updateFormData("beneficiaries", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Food Needed */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">What type of food do you need?</h3>
                <p className="text-muted-foreground">Select the category and specify your requirements.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {foodNeeds.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => updateFormData("foodType", type.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.foodType === type.id
                        ? "border-primary bg-primary/5 shadow-soft"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-3xl block mb-2">{type.icon}</span>
                    <span className="font-medium block">{type.label}</span>
                    <span className="text-xs text-muted-foreground">{type.description}</span>
                  </button>
                ))}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Needed *</Label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="quantity"
                    placeholder="e.g., 100 meals, 50 kg rice"
                    className="pl-10"
                    value={formData.quantity}
                    onChange={(e) => updateFormData("quantity", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Urgency Level *</Label>
                <div className="grid grid-cols-3 gap-3">
                  {urgencyLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => updateFormData("urgency", level.id)}
                      className={`p-3 rounded-xl border-2 transition-all text-center ${
                        formData.urgency === level.id
                          ? `border-${level.color} bg-${level.color}/5`
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-medium block text-sm">{level.label}</span>
                      <span className="text-xs text-muted-foreground">{level.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specificNeeds">Specific Dietary Requirements</Label>
                <Textarea
                  id="specificNeeds"
                  placeholder="Any allergies, religious restrictions, or special dietary needs..."
                  className="min-h-[80px]"
                  value={formData.specificNeeds}
                  onChange={(e) => updateFormData("specificNeeds", e.target.value)}
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label>Reference Images (Optional)</Label>
                <p className="text-xs text-muted-foreground mb-2">Upload photos of your facility or beneficiaries</p>
                <div className="flex flex-wrap gap-3">
                  {images.map((img, index) => (
                    <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden border border-border">
                      <img src={img} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-20 h-20 rounded-lg border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-1 transition-colors"
                  >
                    <Camera className="h-5 w-5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Add</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Delivery Location */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Delivery Location</h3>
                <p className="text-muted-foreground">Where should we deliver the food?</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="address"
                      placeholder="Enter complete address including building name, street, area..."
                      className="pl-10 min-h-[100px]"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="landmark">Nearby Landmark</Label>
                  <Input
                    id="landmark"
                    placeholder="e.g., Near City Mall, Opposite Metro Station"
                    value={formData.landmark}
                    onChange={(e) => updateFormData("landmark", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Delivery Time *</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="preferredTime"
                      type="datetime-local"
                      className="pl-10"
                      value={formData.preferredTime}
                      onChange={(e) => updateFormData("preferredTime", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p className="text-muted-foreground">How can donors or volunteers reach you?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="contactName"
                      placeholder="Enter your full name"
                      className="pl-10"
                      value={formData.contactName}
                      onChange={(e) => updateFormData("contactName", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="email">Email Address (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any other information donors should know..."
                    className="min-h-[80px]"
                    value={formData.notes}
                    onChange={(e) => updateFormData("notes", e.target.value)}
                  />
                </div>
              </div>

              {/* Summary Card */}
              <div className="bg-secondary/50 rounded-xl p-4 mt-6">
                <h4 className="font-semibold mb-3">Request Summary</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Organization:</span>
                    <p className="font-medium">{formData.orgName || "-"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Food Type:</span>
                    <p className="font-medium capitalize">{formData.foodType || "-"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Quantity:</span>
                    <p className="font-medium">{formData.quantity || "-"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Beneficiaries:</span>
                    <p className="font-medium">{formData.beneficiaries ? `${formData.beneficiaries} people` : "-"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            {currentStep < 4 ? (
              <Button 
                onClick={nextStep} 
                className="gap-2 gradient-hero border-0"
                disabled={currentStep === 1 && !formData.orgName}
              >
                Next Step
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                className="gap-2 gradient-hero border-0"
              >
                <Send className="h-4 w-4" />
                Submit Request
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}