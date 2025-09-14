const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-neuro-darker/90 backdrop-blur-xl border-b border-neural-blue/20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-neural-blue/5 via-transparent to-neural-purple/5 animate-glass-shimmer"></div>
      
      <div className="flex items-center gap-3 relative z-10">
        <span className="text-neural-text-glow font-bold text-lg tracking-wider">{currentTime}</span>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-neural-success-bright rounded-full animate-neuron-fire"></div>
          <div className="w-1.5 h-1.5 bg-neural-success-bright rounded-full animate-neuron-fire" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1.5 h-1.5 bg-neural-success-bright rounded-full animate-neuron-fire" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-neural-text-muted text-sm relative z-10">
        <div className="flex items-center gap-2 bg-neural-warning/20 px-3 py-1 rounded-full border border-neural-warning/30 backdrop-blur-sm">
          <span className="text-neural-warning-bright">🔋</span>
          <span className="font-bold text-neural-warning-bright">87%</span>
        </div>
        <div className="flex items-center gap-2 bg-neural-blue/20 px-3 py-1 rounded-full border border-neural-blue/30 backdrop-blur-sm">
          <div className="relative">
            <span className="text-neural-blue-bright">📶</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-neural-success-bright rounded-full animate-pulse"></div>
          </div>
          <span className="font-bold text-neural-blue-bright">5G</span>
        </div>
      </div>
    </div>
  );
};

export { StatusBar };