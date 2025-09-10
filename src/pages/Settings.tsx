import { useState } from "react";
import { StatusBar } from "@/components/StatusBar";
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const [settings, setSettings] = useState({
    autoSleep: true,
    highPerformance: false,
    neuralSync: true,
    dataEncryption: true,
    thoughtPrivacy: true,
    healthAlerts: true,
    batteryWarnings: true,
    adaptiveLearning: true,
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const settingGroups = [
    {
      title: "🧠 Neural Settings",
      color: "neural-purple",
      items: [
        { key: "autoSleep", label: "Auto Sleep Mode", desc: "Automatically reduce power during inactivity" },
        { key: "highPerformance", label: "High Performance", desc: "Maximum processing power" },
        { key: "neuralSync", label: "Neural Sync", desc: "Continuous neural pattern synchronization" },
        { key: "adaptiveLearning", label: "Adaptive Learning", desc: "AI learns from your patterns" },
      ]
    },
    {
      title: "🔒 Privacy & Security",
      color: "neural-success",
      items: [
        { key: "dataEncryption", label: "Data Encryption", desc: "End-to-end encryption of neural data" },
        { key: "thoughtPrivacy", label: "Thought Privacy", desc: "Keep thoughts locally processed" },
      ]
    },
    {
      title: "🔔 Notifications",
      color: "neural-warning",
      items: [
        { key: "healthAlerts", label: "Health Alerts", desc: "Receive neural health notifications" },
        { key: "batteryWarnings", label: "Battery Warnings", desc: "Low battery alerts" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 p-6 pb-24 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent">
            Settings
          </h2>
          <p className="text-neural-text-muted text-sm">
            Configure your neural interface
          </p>
        </div>

        {settingGroups.map((group, groupIndex) => (
          <Card key={groupIndex} className="p-6 bg-neuro-surface/50 border border-neuro-surface-light">
            <h3 className={`font-bold text-lg mb-4 text-center text-${group.color}`}>
              {group.title}
            </h3>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div 
                  key={item.key}
                  className="flex items-start justify-between p-4 bg-neuro-surface/30 rounded-lg border border-neuro-surface-light hover:border-neural-blue/30 transition-all duration-300"
                >
                  <div className="flex-1 pr-4">
                    <div className="font-medium text-neural-text">{item.label}</div>
                    <div className="text-xs text-neural-text-muted mt-1">{item.desc}</div>
                  </div>
                  <button
                    onClick={() => toggleSetting(item.key)}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                      settings[item.key as keyof typeof settings]
                        ? 'bg-gradient-neural shadow-neural'
                        : 'bg-neuro-surface-light'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                        settings[item.key as keyof typeof settings]
                          ? 'left-6'
                          : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        ))}

        {/* Device Info */}
        <Card className="p-6 bg-neuro-surface/30 border border-neuro-surface-light">
          <h3 className="font-bold text-lg mb-4 text-center text-neural-cyan">
            📡 Device Information
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-neural-text-muted">Model</span>
              <span className="text-neural-text font-medium">Neuralink v3.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neural-text-muted">Firmware</span>
              <span className="text-neural-text font-medium">2024.3.1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neural-text-muted">Serial</span>
              <span className="text-neural-text font-medium">NL-2024-7891</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neural-text-muted">Implant Date</span>
              <span className="text-neural-text font-medium">Jan 15, 2024</span>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button variant="neural" className="w-full py-4">
            🔄 Update Firmware
          </Button>
          <Button variant="brain" className="w-full py-4">
            📥 Export Settings
          </Button>
          <Button variant="danger" className="w-full py-4">
            ⚠️ Factory Reset
          </Button>
        </div>
      </div>

      <NavBar currentPath="/settings" />
    </div>
  );
};

export default Settings;