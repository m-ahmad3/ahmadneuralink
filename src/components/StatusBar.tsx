const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-neuro-darker/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="text-neural-text font-semibold">{currentTime}</span>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-neural-success rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-neural-success rounded-full animate-pulse delay-75"></div>
          <div className="w-1 h-1 bg-neural-success rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 text-neural-text-muted text-sm">
        <div className="flex items-center gap-1">
          <span>🔋</span>
          <span className="font-medium">87%</span>
        </div>
        <div className="flex items-center gap-1">
          <span>📶</span>
          <span className="font-medium">5G</span>
        </div>
      </div>
    </div>
  );
};

export { StatusBar };