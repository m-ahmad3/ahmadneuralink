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
    <div className="fixed bottom-0 left-0 right-0 bg-neuro-darker/95 backdrop-blur-xl border-t border-neural-blue/20">
      <div className="flex justify-around items-center py-2 px-4 max-w-sm mx-auto">
        {navItems.map((item) => (
          <div
            key={item.path}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl cursor-pointer transition-all duration-300 min-w-[60px] ${
              currentPath === item.path
                ? 'bg-gradient-neural shadow-neural text-neural-text transform scale-105'
                : 'text-neural-text-muted hover:text-neural-blue hover:scale-105'
            }`}
            onClick={() => navigate(item.path)}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NavBar };