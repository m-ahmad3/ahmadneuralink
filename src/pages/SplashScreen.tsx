import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate after 3 seconds (optional)
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 neural-bg">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-32 h-32 mx-auto bg-gradient-neural rounded-full flex items-center justify-center neural-pulse shadow-neural-strong">
            <span className="text-5xl font-black text-neural-text">N</span>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-neural-cyan/30 rounded-full animate-spin-slow"></div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-5xl font-black bg-gradient-neural bg-clip-text text-transparent">
            NEURALINK
          </h1>
          <p className="text-lg font-semibold bg-gradient-brain bg-clip-text text-transparent">
            Neural Interface v3.0
          </p>
          <p className="text-neural-text-muted text-base max-w-sm mx-auto">
            Experience the future of brain-computer interfaces with advanced neural connectivity
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-8 space-y-4">
          <Button 
            variant="neural" 
            size="lg" 
            className="w-full text-lg px-12 py-4 rounded-xl"
            onClick={() => navigate("/auth")}
          >
            🚀 Initialize Neural Link
          </Button>
          
          <p className="text-xs text-neural-text-dim">
            Secure • Private • Encrypted
          </p>
        </div>
      </div>

      {/* Neural Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neural-blue rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neural-purple rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neural-cyan rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default SplashScreen;