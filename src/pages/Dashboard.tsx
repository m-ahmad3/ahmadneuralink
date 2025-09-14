import { useNavigate } from "react-router-dom";
import { StatusBar } from "@/components/StatusBar";
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import brainDiagram from "@/assets/brain-diagram.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const metrics = [
    { label: "Battery", value: "87%", color: "warning", icon: "🔋" },
    { label: "Health", value: "94", color: "success", icon: "🧠" },
    { label: "Activity", value: "Low", color: "info", icon: "⚡" },
    { label: "Latency", value: "8ms", color: "neural", icon: "📡" },
  ];

  const actions = [
    { label: "Control Center", icon: "⚡", path: "/control" },
    { label: "Brain Health", icon: "🧠", path: "/health" },
    { label: "Thought→Text", icon: "💭", path: "/thought" },
    { label: "Neural Training", icon: "🎯", path: "/training" },
    { label: "Analytics", icon: "📊", path: "/analytics" },
    { label: "Settings", icon: "⚙️", path: "/settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 p-6 pb-24 space-y-6">
        {/* Status Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-gradient-success px-4 py-2 rounded-full text-sm font-bold">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            NEURAL CHIP ONLINE
          </div>
          <p className="text-neural-text-muted text-sm">All systems operational</p>
        </div>

        {/* Enhanced Brain Visualization */}
        <Card className="relative overflow-hidden bg-neuro-surface/60 border-2 border-neural-blue/30 backdrop-blur-glass shadow-glass">
          <div className="p-8 text-center relative z-10">
            <div className="relative">
              <img 
                src={brainDiagram} 
                alt="Brain Activity" 
                className="w-36 h-36 mx-auto opacity-90 animate-neural-pulse relative z-10"
              />
              {/* Quantum glow ring */}
              <div className="absolute inset-0 border-4 border-neural-quantum/40 rounded-full animate-plasma-rotation scale-110"></div>
              <div className="absolute inset-2 border-2 border-neural-cyan/60 rounded-full animate-quantum-glow scale-105"></div>
            </div>
            <p className="text-sm text-neural-text-glow mt-4 font-bold tracking-wide">Real-time Neural Activity</p>
            <div className="flex justify-center gap-2 mt-3">
              <div className="w-2 h-1 bg-neural-success-bright rounded-full animate-data-flow"></div>
              <div className="w-2 h-1 bg-neural-blue-bright rounded-full animate-data-flow" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-1 bg-neural-purple-bright rounded-full animate-data-flow" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/10 via-neural-quantum/5 to-neural-purple/10 animate-glass-shimmer"></div>
          <div className="absolute inset-0 bg-gradient-plasma opacity-5 animate-plasma-rotation"></div>
        </Card>

        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-2 gap-5">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.label}
              className={`p-6 text-center bg-neuro-surface/80 border-2 hover:scale-110 transition-all duration-500 cursor-pointer backdrop-blur-glass shadow-glass relative overflow-hidden group ${
                metric.color === 'warning' ? 'border-neural-warning/40 hover:border-neural-warning-bright hover:shadow-neural-glow-quantum' :
                metric.color === 'success' ? 'border-neural-success/40 hover:border-neural-success-bright hover:shadow-neural-glow-quantum' :
                metric.color === 'info' ? 'border-neural-info/40 hover:border-neural-info-bright hover:shadow-neural-glow-quantum' :
                'border-neural-blue/40 hover:border-neural-blue-bright hover:shadow-neural-strong'
              }`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-glass-shimmer animate-glass-shimmer"></div>
              
              <div className={`text-3xl mb-3 relative z-10 animate-quantum-float ${
                metric.color === 'warning' ? 'filter drop-shadow-[0_0_8px_rgb(245,158,11)]' :
                metric.color === 'success' ? 'filter drop-shadow-[0_0_8px_rgb(16,185,129)]' :
                metric.color === 'info' ? 'filter drop-shadow-[0_0_8px_rgb(59,130,246)]' :
                'filter drop-shadow-[0_0_8px_rgb(59,130,246)]'
              }`}>
                {metric.icon}
              </div>
              <div className={`text-3xl font-black mb-2 relative z-10 ${
                metric.color === 'warning' ? 'text-neural-warning-bright' :
                metric.color === 'success' ? 'text-neural-success-bright' :
                metric.color === 'info' ? 'text-neural-info-bright' :
                'text-neural-blue-bright'
              }`}>
                {metric.value}
              </div>
              <div className="text-xs text-neural-text-glow uppercase tracking-[0.2em] font-bold relative z-10">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Actions Grid */}
        <div className="grid grid-cols-2 gap-5">
          {actions.map((action, index) => (
            <Card
              key={action.label}
              className="p-6 text-center bg-neuro-surface/70 border-2 border-neuro-surface-light/50 hover:border-neural-blue-bright/60 hover:bg-neuro-surface-glow cursor-pointer transition-all duration-500 hover:scale-110 backdrop-blur-glass shadow-glass relative overflow-hidden group"
              onClick={() => navigate(action.path)}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/10 via-neural-purple/5 to-neural-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-glass-shimmer opacity-0 group-hover:opacity-100 group-hover:animate-glass-shimmer transition-opacity duration-500"></div>
              
              <div className="text-4xl mb-4 relative z-10 group-hover:animate-quantum-float transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_12px_rgb(59,130,246)]">
                {action.icon}
              </div>
              <div className="text-sm font-bold text-neural-text-glow relative z-10 tracking-wide group-hover:text-neural-blue-bright transition-colors duration-300">
                {action.label}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <NavBar currentPath="/dashboard" />
    </div>
  );
};

export default Dashboard;