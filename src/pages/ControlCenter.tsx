import { useState } from "react";
import { StatusBar } from "@/components/StatusBar";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import neuralinkChip from "@/assets/neuralink-chip.png";

const ControlCenter = () => {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [performanceMode, setPerformanceMode] = useState("balanced");

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };

  const signalBars = [
    { height: "h-3", active: isPowerOn },
    { height: "h-4", active: isPowerOn },
    { height: "h-6", active: isPowerOn },
    { height: "h-8", active: isPowerOn },
    { height: "h-10", active: isPowerOn },
  ];

  const modes = [
    { id: "eco", label: "Eco", desc: "Low power" },
    { id: "balanced", label: "Balanced", desc: "Optimal" },
    { id: "performance", label: "Max", desc: "High power" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 p-6 pb-24 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent">
            Neural Control Center
          </h2>
          <p className="text-neural-text-muted text-sm">
            Manage your neural interface settings
          </p>
        </div>

        {/* Power Control */}
        <Card className="p-6 text-center bg-neuro-surface/70 border-2 border-neural-blue/20">
          <div className="space-y-6">
            <img 
              src={neuralinkChip} 
              alt="Neuralink Chip" 
              className={`w-24 h-24 mx-auto transition-all duration-500 ${
                isPowerOn ? 'opacity-100 animate-neural-pulse' : 'opacity-40 grayscale'
              }`}
            />
            
            <div
              className={`w-40 h-40 mx-auto rounded-full flex items-center justify-center text-2xl font-black cursor-pointer transition-all duration-500 ${
                isPowerOn
                  ? 'bg-gradient-success shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-neuro-surface border-2 border-neuro-surface-light text-neural-text-dim'
              }`}
              onClick={togglePower}
            >
              {isPowerOn ? 'ON' : 'OFF'}
            </div>
            
            <p className="text-sm text-neural-text-muted">
              Neural Interface Status: <span className={isPowerOn ? 'text-neural-success' : 'text-neural-text-dim'}>
                {isPowerOn ? 'Active' : 'Standby'}
              </span>
            </p>
          </div>
        </Card>

        {/* Signal Strength */}
        <Card className="p-6 bg-neuro-surface/50 border border-neuro-surface-light">
          <div className="text-center space-y-4">
            <h3 className="font-semibold text-neural-text">Signal Strength</h3>
            <div className="flex justify-center items-end gap-2 h-16">
              {signalBars.map((bar, index) => (
                <div
                  key={index}
                  className={`w-4 bg-gradient-neural rounded-t transition-all duration-300 ${bar.height} ${
                    bar.active ? 'opacity-100' : 'opacity-20'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-neural-text-muted">
              Connection Quality: {isPowerOn ? 'Excellent' : 'Disconnected'}
            </p>
          </div>
        </Card>

        {/* Performance Modes */}
        <Card className="p-6 bg-neuro-surface/50 border border-neuro-surface-light">
          <h3 className="font-semibold text-neural-text mb-4 text-center">Performance Mode</h3>
          <div className="grid grid-cols-3 gap-3">
            {modes.map((mode) => (
              <Button
                key={mode.id}
                variant={performanceMode === mode.id ? "neural" : "chip"}
                className="flex flex-col gap-1 h-auto py-4"
                onClick={() => setPerformanceMode(mode.id)}
              >
                <span className="font-bold">{mode.label}</span>
                <span className="text-xs opacity-80">{mode.desc}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="brain" className="py-6 flex flex-col gap-2">
            <span className="text-2xl">🔄</span>
            <span className="text-sm">Sync Neural Data</span>
          </Button>
          <Button variant="warning" className="py-6 flex flex-col gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-sm">Calibrate Sensors</span>
          </Button>
        </div>
      </div>

      <NavBar currentPath="/control" />
    </div>
  );
};

export default ControlCenter;