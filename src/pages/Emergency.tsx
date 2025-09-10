import { useNavigate } from "react-router-dom";
import { StatusBar } from "@/components/StatusBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Emergency = () => {
  const navigate = useNavigate();

  const emergencyActions = [
    { 
      title: "Emergency Shutdown", 
      description: "Immediately power down neural interface",
      icon: "🔴", 
      action: "shutdown",
      danger: true 
    },
    { 
      title: "Medical Alert", 
      description: "Send distress signal to medical team",
      icon: "🚨", 
      action: "medical",
      danger: true 
    },
    { 
      title: "Safe Mode", 
      description: "Switch to minimal power operation",
      icon: "🛡️", 
      action: "safemode",
      danger: false 
    },
    { 
      title: "Reset to Default", 
      description: "Restore factory settings",
      icon: "🔄", 
      action: "reset",
      danger: false 
    },
  ];

  const vitalSigns = [
    { label: "Heart Rate", value: "78 BPM", status: "normal", icon: "❤️" },
    { label: "Blood Pressure", value: "120/80", status: "normal", icon: "🩸" },
    { label: "Neural Activity", value: "Stable", status: "normal", icon: "🧠" },
    { label: "Temperature", value: "98.6°F", status: "normal", icon: "🌡️" },
  ];

  const handleEmergencyAction = (action: string) => {
    switch (action) {
      case "shutdown":
        alert("⚠️ Neural interface shutdown initiated. This will disconnect all neural functions.");
        navigate("/");
        break;
      case "medical":
        alert("🚨 Medical alert sent to emergency contacts and healthcare providers.");
        break;
      case "safemode":
        alert("🛡️ Switching to safe mode. Non-essential functions disabled.");
        navigate("/dashboard");
        break;
      case "reset":
        alert("🔄 Factory reset initiated. All personal settings will be lost.");
        navigate("/auth");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neuro-dark to-neuro-darker">
      <StatusBar />
      
      <div className="flex-1 p-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-neural-danger">
            ⚠️ Emergency Override
          </h2>
          <p className="text-neural-text-muted text-sm">
            Critical system controls and medical monitoring
          </p>
        </div>

        {/* Emergency Status */}
        <Card className="p-6 bg-gradient-danger/10 border-2 border-neural-danger/50">
          <div className="text-center space-y-3">
            <div className="text-6xl animate-pulse">🚨</div>
            <h3 className="text-xl font-bold text-neural-danger">
              Emergency Mode Active
            </h3>
            <p className="text-sm text-neural-text-muted">
              You have accessed emergency override protocols. All actions are logged.
            </p>
          </div>
        </Card>

        {/* Vital Signs */}
        <Card className="p-6 bg-neuro-surface/50 border border-neural-success/30">
          <h3 className="font-semibold text-neural-success mb-4 text-center">
            🩺 Vital Signs Monitor
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {vitalSigns.map((vital) => (
              <div 
                key={vital.label}
                className="p-3 bg-neuro-surface/30 rounded-lg border border-neural-success/20"
              >
                <div className="text-center space-y-1">
                  <div className="text-xl">{vital.icon}</div>
                  <div className="text-neural-success font-semibold text-sm">
                    {vital.value}
                  </div>
                  <div className="text-xs text-neural-text-muted">
                    {vital.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-neural-success mt-4">
            All vital signs within normal range
          </p>
        </Card>

        {/* Emergency Actions */}
        <div className="space-y-4">
          <h3 className="font-semibold text-neural-text text-center">
            Emergency Actions
          </h3>
          {emergencyActions.map((action) => (
            <Card 
              key={action.action}
              className={`p-4 border-2 ${
                action.danger 
                  ? 'bg-gradient-danger/5 border-neural-danger/30' 
                  : 'bg-neuro-surface/30 border-neural-warning/30'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{action.icon}</div>
                <div className="flex-1">
                  <div className={`font-semibold ${
                    action.danger ? 'text-neural-danger' : 'text-neural-warning'
                  }`}>
                    {action.title}
                  </div>
                  <div className="text-xs text-neural-text-muted">
                    {action.description}
                  </div>
                </div>
                <Button
                  variant={action.danger ? "danger" : "warning"}
                  size="sm"
                  onClick={() => handleEmergencyAction(action.action)}
                >
                  Execute
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Emergency Services */}
        <Card className="p-6 bg-gradient-danger/5 border-2 border-neural-danger/30">
          <div className="text-center space-y-4">
            <h3 className="font-bold text-neural-danger">
              📞 Emergency Contacts
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Button variant="danger" className="py-3">
                🚑 Call 911
              </Button>
              <Button variant="danger" className="py-3">
                🏥 Neuralink Support
              </Button>
              <Button variant="warning" className="py-3">
                👨‍⚕️ My Doctor
              </Button>
              <Button variant="warning" className="py-3">
                👥 Emergency Contact
              </Button>
            </div>
          </div>
        </Card>

        {/* Return to Safety */}
        <div className="pt-4">
          <Button 
            variant="neural" 
            className="w-full py-4"
            onClick={() => navigate("/dashboard")}
          >
            ← Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Emergency;