import { useState } from "react";
import { StatusBar } from "@/components/StatusBar";
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import neuralPattern from "@/assets/neural-pattern.png";

const Training = () => {
  const [currentExercise, setCurrentExercise] = useState("focus");
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(65);

  const exercises = [
    { 
      id: "focus", 
      title: "Focus Enhancement", 
      icon: "🎯", 
      description: "Strengthen concentration pathways",
      duration: "10 min"
    },
    { 
      id: "memory", 
      title: "Memory Boost", 
      icon: "🧠", 
      description: "Optimize memory formation",
      duration: "15 min"
    },
    { 
      id: "motor", 
      title: "Motor Control", 
      icon: "🤚", 
      description: "Fine-tune motor cortex responses",
      duration: "12 min"
    },
    { 
      id: "emotion", 
      title: "Emotional Balance", 
      icon: "😌", 
      description: "Regulate emotional responses",
      duration: "8 min"
    },
  ];

  const trainingHistory = [
    { date: "Today", exercises: 3, performance: 94, time: "35 min" },
    { date: "Yesterday", exercises: 2, performance: 91, time: "22 min" },
    { date: "2 days ago", exercises: 4, performance: 89, time: "41 min" },
  ];

  const toggleTraining = () => {
    setIsTraining(!isTraining);
    if (!isTraining) {
      // Simulate progress update
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setIsTraining(false);
            return 100;
          }
          return prev + 2;
        });
      }, 200);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 p-6 pb-24 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-neural bg-clip-text text-transparent">
            Neural Training
          </h2>
          <p className="text-neural-text-muted text-sm">
            Optimize your brain's performance
          </p>
        </div>

        {/* Neural Pattern Visualization */}
        <Card className="relative overflow-hidden bg-neuro-surface/50 border-2 border-neural-purple/30">
          <div className="p-6 text-center">
            <img 
              src={neuralPattern} 
              alt="Neural Training Pattern" 
              className={`w-40 h-40 mx-auto ${isTraining ? 'animate-neural-pulse' : 'opacity-70'}`}
            />
            <div className={`absolute inset-0 ${isTraining ? 'animate-neural-glow' : ''}`} />
          </div>
          {isTraining && (
            <div className="absolute bottom-4 left-6 right-6">
              <div className="bg-neuro-surface-light rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-neural h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-center text-xs text-neural-text-muted mt-2">
                Training Progress: {progress}%
              </p>
            </div>
          )}
        </Card>

        {/* Exercise Selection */}
        <Card className="p-6 bg-neuro-surface/50 border border-neuro-surface-light">
          <h3 className="font-semibold text-neural-text mb-4 text-center">
            Training Exercises
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {exercises.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => setCurrentExercise(exercise.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                  currentExercise === exercise.id
                    ? 'border-neural-blue bg-neural-blue/10'
                    : 'border-neuro-surface-light bg-neuro-surface/30 hover:border-neural-blue/50'
                }`}
              >
                <div className="text-2xl mb-2">{exercise.icon}</div>
                <div className="text-sm font-semibold text-neural-text mb-1">
                  {exercise.title}
                </div>
                <div className="text-xs text-neural-text-muted mb-2">
                  {exercise.description}
                </div>
                <div className="text-xs text-neural-blue font-medium">
                  {exercise.duration}
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Training Controls */}
        <Card className="p-6 bg-neuro-surface/30 border border-neural-success/20">
          <div className="text-center space-y-4">
            <h3 className="font-semibold text-neural-success">
              {exercises.find(e => e.id === currentExercise)?.title}
            </h3>
            <Button
              variant={isTraining ? "warning" : "success"}
              size="lg"
              onClick={toggleTraining}
              className="w-full py-4 text-lg"
            >
              {isTraining ? '⏸️ Pause Training' : '▶️ Start Training'}
            </Button>
            {isTraining && (
              <p className="text-sm text-neural-text-muted">
                Neural pathways are being optimized...
              </p>
            )}
          </div>
        </Card>

        {/* Training History */}
        <Card className="p-6 bg-neuro-surface/30 border border-neuro-surface-light">
          <h3 className="font-semibold text-neural-text mb-4 text-center">
            📈 Training History
          </h3>
          <div className="space-y-3">
            {trainingHistory.map((session, index) => (
              <div 
                key={session.date}
                className="flex justify-between items-center p-3 bg-neuro-surface/50 rounded-lg"
              >
                <div className="text-sm text-neural-text">{session.date}</div>
                <div className="flex gap-4 text-xs text-neural-text-muted">
                  <span>{session.exercises} exercises</span>
                  <span className="text-neural-success">{session.performance}%</span>
                  <span>{session.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="neural" className="py-4">
            🏆 View Achievements
          </Button>
          <Button variant="brain" className="py-4">
            📊 Performance Report
          </Button>
        </div>
      </div>

      <NavBar currentPath="/training" />
    </div>
  );
};

export default Training;