import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import DonateDashboardPage from "./pages/DonateDashboardPage";
import RequestDashboardPage from "./pages/RequestDashboardPage";
import DonatePage from "./pages/DonatePage";
import RequestsPage from "./pages/RequestsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
      
          <Route path="/auth" element={<AuthPage />} />
          
        
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
          <Route path="/donate-dashboard" element={<Layout><DonateDashboardPage /></Layout>} />
          <Route path="/request-dashboard" element={<Layout><RequestDashboardPage /></Layout>} />
          <Route path="/donate" element={<Layout><DonatePage /></Layout>} />
          <Route path="/requests" element={<Layout><RequestsPage /></Layout>} />
          <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;