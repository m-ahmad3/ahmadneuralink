import { useState, useEffect } from "react";
import { StatusBar } from "@/components/StatusBar";
import { NavBar } from "@/components/NavBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ThoughtToText = () => {
  const [isRecording, setIsRecording] = useState(true);
  const [thoughtText, setThoughtText] = useState("I am thinking about the beautiful sunset over the mountains. The neural interface is working perfectly, converting my thoughts into text in real-time...");
  const [showCursor, setShowCursor] = useState(true);

  const thoughtSamples = [
    "I wonder what the weather will be like tomorrow...",
    "The neural interface feels so natural now.",
    "I should remember to call mom later today.",
    "This technology is absolutely incredible.",
    "I'm thinking about my next project at work.",
    "The sunset looks beautiful from here.",
    "Time seems to move differently when I'm focused.",
    "I love how seamlessly this captures my thoughts."
  ];

  useEffect(() => {
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isRecording) return;

    // Simulate thought text changes
    const thoughtInterval = setInterval(() => {
      const randomThought = thoughtSamples[Math.floor(Math.random() * thoughtSamples.length)];
      setThoughtText(randomThought);
    }, 4000);

    return () => clearInterval(thoughtInterval);
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const clearText = () => {
    setThoughtText("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StatusBar />
      
      <div className="flex-1 p-6 pb-24 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-brain bg-clip-text text-transparent">
            Neural Transcription
          </h2>
          <p className="text-neural-text-muted text-sm">
            Think and watch your thoughts become text
          </p>
        </div>

        {/* Thought Output */}
        <Card className="p-6 min-h-[200px] bg-neuro-surface/50 border-2 border-neural-blue/30">
          <div className="font-mono text-base leading-relaxed text-neural-text">
            {thoughtText}
            {showCursor && isRecording && (
              <span className="inline-block w-0.5 h-5 bg-neural-success ml-1 animate-pulse" />
            )}
          </div>
        </Card>

        {/* Neural Wave Visualization */}
        <Card className="relative overflow-hidden bg-neuro-surface/30 border border-neural-cyan/20 h-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-neural-text-muted text-sm">Neural Wave Pattern</span>
          </div>
          {isRecording && (
            <>
              <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-neural-success via-neural-blue to-neural-purple animate-brain-wave" />
              <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-neural-purple via-neural-cyan to-neural-success animate-brain-wave delay-75" />
            </>
          )}
        </Card>

        {/* Status Info */}
        <div className="text-center space-y-2">
          <div className="flex justify-center gap-6 text-sm text-neural-text-muted">
            <span>Accuracy: <span className="text-neural-success font-semibold">94%</span></span>
            <span>Speed: <span className="text-neural-blue font-semibold">120 WPM</span></span>
          </div>
          <div className="flex justify-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-neural-success animate-pulse' : 'bg-neural-text-dim'}`} />
            <span className="text-xs text-neural-text-muted">
              Status: {isRecording ? 'Recording' : 'Paused'}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            variant="neuroglow"
            size="icon"
            className="w-16 h-16 rounded-full"
            onClick={toggleRecording}
          >
            {isRecording ? '⏸️' : '⏺️'}
          </Button>
          <Button
            variant="chip"
            size="icon"
            className="w-16 h-16 rounded-full"
            onClick={clearText}
          >
            🗑️
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="neural" className="py-4">
            💾 Save Transcript
          </Button>
          <Button variant="brain" className="py-4">
            📤 Share Text
          </Button>
        </div>
      </div>

      <NavBar currentPath="/thought" />
    </div>
  );
};

export default ThoughtToText;