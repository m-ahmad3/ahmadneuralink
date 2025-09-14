import { useNavigate } from "react-router-dom";

interface NavBarProps {
  currentPath: string;
}

const NavBar = ({ currentPath }: NavBarProps) => {
  const navigate = useNavigate();

  const navItems = [
    { path: "/dashboard", icon: "🏠", label: "Home" },
    { path: "/control", icon: "⚡", label: "Control" },
    { path: "/health", icon: "🧠", label: "Health" },
    { path: "/thought", icon: "💭", label: "Thought" },
    { path: "/settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neuro-darker/95 backdrop-blur-glass border-t border-neural-blue/30 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neural-blue/10 via-transparent to-neural-purple/5 animate-glass-shimmer"></div>
      <div className="absolute inset-0 bg-gradient-plasma opacity-5 animate-plasma-rotation"></div>
      
      <div className="flex justify-around items-center py-3 px-4 max-w-sm mx-auto relative z-10">
        {navItems.map((item) => (
          <div
            key={item.path}
            className={`flex flex-col items-center gap-1 p-3 rounded-2xl cursor-pointer transition-all duration-500 min-w-[65px] relative overflow-hidden ${
              currentPath === item.path
                ? 'bg-gradient-neural shadow-neural-strong text-neural-text-glow transform scale-110 border border-neural-blue/50 quantum-glow'
                : 'text-neural-text-muted hover:text-neural-blue-bright hover:scale-110 hover:bg-neuro-surface/30 hover:backdrop-blur-lg hover:border hover:border-neural-blue/20'
            }`}
            onClick={() => navigate(item.path)}
          >
            {/* Glass effect background for active item */}
            {currentPath === item.path && (
              <div className="absolute inset-0 bg-glass-shimmer animate-glass-shimmer"></div>
            )}
            
            <span className={`text-2xl relative z-10 transition-all duration-300 ${
              currentPath === item.path ? 'animate-quantum-float' : ''
            }`}>
              {item.icon}
            </span>
            <span className="text-xs font-bold relative z-10 tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NavBar };