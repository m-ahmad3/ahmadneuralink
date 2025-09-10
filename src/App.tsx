import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SplashScreen from "./pages/SplashScreen";
import AuthScreen from "./pages/AuthScreen";
import Dashboard from "./pages/Dashboard";
import ControlCenter from "./pages/ControlCenter";
import BrainHealth from "./pages/BrainHealth";
import ThoughtToText from "./pages/ThoughtToText";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Training from "./pages/Training";
import Emergency from "./pages/Emergency";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="mobile-app neural-bg dark">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/auth" element={<AuthScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/control" element={<ControlCenter />} />
            <Route path="/health" element={<BrainHealth />} />
            <Route path="/thought" element={<ThoughtToText />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/training" element={<Training />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/old" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
