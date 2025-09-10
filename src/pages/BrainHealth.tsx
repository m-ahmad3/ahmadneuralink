import { StatusBar } from "@/components/StatusBar";
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import brainDiagram from "@/assets/brain-diagram.png";

const BrainHealth = () => {
  const healthMetrics = [
    { label: "Neural Activity", value: "94%", status: "optimal", icon: "🧠" },
    { label: "Stress Level", value: "Low", status: "good", icon: "😌" },
    { label: "Sleep Quality", value: "87%", status: "good", icon: "😴" },
    { label: "Cognitive Load", value: "Normal", status: "optimal", icon: "🎯" },
  ];

  const brainRegions = [
    { name: "Prefrontal Cortex", activity: 92, color: "neural-blue" },
    { name: "Motor Cortex", activity: 78, color: "neural-purple" },
    { name: "Visual Cortex", activity: 85, color: "neural-cyan" },
    { name: "Temporal Lobe", activity: 91, color: "neural-pink" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 p-6 pb-24 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-brain bg-clip-text text-transparent">
            Brain Health Monitor
          </h2>
          <p className="text-neural-text-muted text-sm">
            Real-time neural activity analysis
          </p>
        </div>

        {/* Brain Visualization */}
        <Card className="relative overflow-hidden bg-neuro-surface/50 border-2 border-neural-cyan/30">
          <div className="p-6 text-center">
            <img 
              src={brainDiagram} 
              alt="Brain Health Diagram" 
              className="w-48 h-48 mx-auto animate-neural-pulse"
            />
            <div className="absolute top-4 right-4 bg-gradient-success px-3 py-1 rounded-full text-xs font-bold">
              HEALTHY
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-neural-cyan/10 to-neural-pink/10"></div>
        </Card>

        {/* Health Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {healthMetrics.map((metric, index) => (
            <Card 
              key={metric.label}
              className={`p-4 text-center bg-neuro-surface/70 border-2 transition-all duration-300 ${
                metric.status === 'optimal' 
                  ? 'border-neural-success/30 hover:border-neural-success' 
                  : 'border-neural-warning/30 hover:border-neural-warning'
              }`}
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className={`text-xl font-bold mb-1 ${
                metric.status === 'optimal' ? 'text-neural-success' : 'text-neural-warning'
              }`}>
                {metric.value}
              </div>
              <div className="text-xs text-neural-text-muted">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Brain Region Activity */}
        <Card className="p-6 bg-neuro-surface/50 border border-neuro-surface-light">
          <h3 className="font-semibold text-neural-text mb-4 text-center">
            Regional Brain Activity
          </h3>
          <div className="space-y-4">
            {brainRegions.map((region, index) => (
              <div key={region.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neural-text">{region.name}</span>
                  <span className={`font-bold text-${region.color}`}>{region.activity}%</span>
                </div>
                <div className="w-full bg-neuro-surface-light rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r from-${region.color} to-${region.color}/70 h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${region.activity}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Health Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="brain" className="py-6 flex flex-col gap-2">
            <span className="text-2xl">📊</span>
            <span className="text-sm">Detailed Report</span>
          </Button>
          <Button variant="neural" className="py-6 flex flex-col gap-2">
            <span className="text-2xl">🎯</span>
            <span className="text-sm">Set Health Goals</span>
          </Button>
        </div>
      </div>

      <NavBar currentPath="/health" />
    </div>
  );
};

export default BrainHealth;