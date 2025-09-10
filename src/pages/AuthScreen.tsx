import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatusBar } from "@/components/StatusBar";

const AuthScreen = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [pinFilled, setPinFilled] = useState(0);

  const handleBiometricScan = () => {
    setIsScanning(true);
    
    // Simulate PIN filling
    let filled = 0;
    const fillInterval = setInterval(() => {
      filled++;
      setPinFilled(filled);
      
      if (filled >= 4) {
        clearInterval(fillInterval);
        setTimeout(() => {
          setIsScanning(false);
          navigate("/dashboard");
        }, 1000);
      }
    }, 400);
  };

  const handleEmergencyAccess = () => {
    navigate("/emergency");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-neural bg-clip-text text-transparent">
            Neural Authentication
          </h2>
          <p className="text-neural-text-muted text-base">
            Authenticate with your neural signature
          </p>
        </div>

        {/* Biometric Scanner */}
        <div className="relative">
          <div 
            className={`w-40 h-40 bg-gradient-brain rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
              isScanning 
                ? 'neural-glow animate-neural-pulse shadow-brain' 
                : 'shadow-neural hover:shadow-neural-strong'
            }`}
            onClick={handleBiometricScan}
          >
            <span className="text-6xl">
              {isScanning ? '🔍' : '👆'}
            </span>
          </div>
          
          {isScanning && (
            <div className="absolute inset-0 border-4 border-transparent border-t-neural-success rounded-full animate-spin"></div>
          )}
        </div>

        <p className="text-center text-neural-text-muted">
          {isScanning ? 'Scanning neural pattern...' : 'Touch sensor to authenticate'}
        </p>

        {/* PIN Indicators */}
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                pinFilled >= dot
                  ? 'bg-gradient-success border-neural-success shadow-lg scale-110'
                  : 'border-neuro-surface-light bg-neuro-surface/20'
              }`}
            />
          ))}
        </div>

        <p className="text-center text-xs text-neural-text-dim">
          Backup neural pattern authentication
        </p>

        {/* Emergency Access */}
        <div className="pt-4">
          <Button 
            variant="danger" 
            onClick={handleEmergencyAccess}
            className="w-full"
          >
            🚨 Emergency Override
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;