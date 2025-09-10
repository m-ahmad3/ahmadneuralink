import { StatusBar } from "@/components/StatusBar";
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Analytics = () => {
  const usageStats = [
    { label: "Daily Use", value: "7.2h", trend: "+12%", color: "neural-warning" },
    { label: "Thoughts", value: "1,247", trend: "+8%", color: "neural-blue" },
    { label: "Uptime", value: "98.7%", trend: "+2%", color: "neural-success" },
    { label: "Accuracy", value: "94.2%", trend: "+5%", color: "neural-purple" },
  ];

  const weeklyData = [
    { day: "Mon", usage: 85 },
    { day: "Tue", usage: 72 },
    { day: "Wed", usage: 91 },
    { day: "Thu", usage: 68 },
    { day: "Fri", usage: 95 },
    { day: "Sat", usage: 78 },
    { day: "Sun", usage: 82 },
  ];

  const achievements = [
    { title: "Neural Pioneer", desc: "First successful thought-to-text", icon: "🏆", unlocked: true },
    { title: "Consistent User", desc: "7 days continuous usage", icon: "⭐", unlocked: true },
    { title: "High Accuracy", desc: "95%+ accuracy for 24h", icon: "🎯", unlocked: false },
    { title: "Power Saver", desc: "Optimize battery for 48h", icon: "🔋", unlocked: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 p-6 pb-24 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent">
            Usage Analytics
          </h2>
          <p className="text-neural-text-muted text-sm">
            Insights into your neural interface usage
          </p>
        </div>

        {/* Usage Statistics */}
        <div className="grid grid-cols-2 gap-4">
          {usageStats.map((stat, index) => (
            <Card 
              key={stat.label}
              className={`p-4 text-center bg-neuro-surface/50 border-2 border-${stat.color}/30 hover:border-${stat.color} transition-all duration-300`}
            >
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-neural-text-muted mb-2">
                {stat.label}
              </div>
              <div className={`text-xs font-semibold text-${stat.color}`}>
                {stat.trend}
              </div>
            </Card>
          ))}
        </div>

        {/* Weekly Usage Chart */}
        <Card className="p-6 bg-neuro-surface/50 border border-neuro-surface-light">
          <h3 className="font-semibold text-neural-text mb-4 text-center">
            Weekly Usage Pattern
          </h3>
          <div className="flex justify-between items-end h-32 gap-2">
            {weeklyData.map((day, index) => (
              <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-gradient-neural rounded-t transition-all duration-1000 hover:opacity-80"
                  style={{ height: `${day.usage}%` }}
                />
                <span className="text-xs text-neural-text-muted">{day.day}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-neural-text-muted mt-4">
            Average: 81% daily neural interface utilization
          </p>
        </Card>

        {/* Performance Insights */}
        <Card className="p-6 bg-neuro-surface/30 border border-neural-blue/20">
          <h3 className="font-semibold text-neural-blue mb-4 text-center">
            🎯 Performance Insights
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center p-3 bg-neuro-surface/50 rounded-lg">
              <span className="text-neural-text">Peak Performance Time</span>
              <span className="text-neural-blue font-semibold">10:00 - 12:00</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-neuro-surface/50 rounded-lg">
              <span className="text-neural-text">Most Active Neural Region</span>
              <span className="text-neural-purple font-semibold">Prefrontal Cortex</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-neuro-surface/50 rounded-lg">
              <span className="text-neural-text">Improvement Opportunity</span>
              <span className="text-neural-warning font-semibold">Evening Focus</span>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6 bg-neuro-surface/30 border border-neural-success/20">
          <h3 className="font-semibold text-neural-success mb-4 text-center">
            🏆 Neural Achievements
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                  achievement.unlocked
                    ? 'border-neural-success/50 bg-neural-success/10'
                    : 'border-neuro-surface-light bg-neuro-surface/20 opacity-50'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="text-xs font-semibold text-neural-text mb-1">
                  {achievement.title}
                </div>
                <div className="text-xs text-neural-text-muted">
                  {achievement.desc}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="neural" className="py-4">
            📊 Export Report
          </Button>
          <Button variant="brain" className="py-4">
            🎯 Set Goals
          </Button>
        </div>
      </div>

      <NavBar currentPath="/analytics" />
    </div>
  );
};

export default Analytics;