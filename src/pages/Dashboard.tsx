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

        {/* Brain Visualization */}
        <Card className="relative overflow-hidden bg-neuro-surface/50 border-neural-blue/20">
          <div className="p-6 text-center">
            <img 
              src={brainDiagram} 
              alt="Brain Activity" 
              className="w-32 h-32 mx-auto opacity-80 animate-neural-pulse"
            />
            <p className="text-xs text-neural-text-muted mt-2">Real-time Neural Activity</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-neural-blue/5 to-neural-purple/5"></div>
        </Card>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.label}
              className={`p-4 text-center bg-neuro-surface/70 border-2 hover:scale-105 transition-all duration-300 cursor-pointer ${
                metric.color === 'warning' ? 'border-neural-warning/30 hover:border-neural-warning' :
                metric.color === 'success' ? 'border-neural-success/30 hover:border-neural-success' :
                metric.color === 'info' ? 'border-neural-info/30 hover:border-neural-info' :
                'border-neural-blue/30 hover:border-neural-blue'
              }`}
            >
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className={`text-2xl font-bold mb-1 ${
                metric.color === 'warning' ? 'text-neural-warning' :
                metric.color === 'success' ? 'text-neural-success' :
                metric.color === 'info' ? 'text-neural-info' :
                'text-neural-blue'
              }`}>
                {metric.value}
              </div>
              <div className="text-xs text-neural-text-muted uppercase tracking-wider">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Actions Grid */}
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Card
              key={action.label}
              className="p-4 text-center bg-neuro-surface/50 border border-neuro-surface-light hover:border-neural-blue/50 hover:bg-neuro-surface cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => navigate(action.path)}
            >
              <div className="text-3xl mb-3">{action.icon}</div>
              <div className="text-sm font-medium text-neural-text">
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