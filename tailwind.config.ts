import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Enhanced Neural Interface Colors
        neural: {
          blue: "hsl(var(--neural-blue))",
          "blue-bright": "hsl(var(--neural-blue-bright))",
          purple: "hsl(var(--neural-purple))",
          "purple-bright": "hsl(var(--neural-purple-bright))",
          cyan: "hsl(var(--neural-cyan))",
          "cyan-bright": "hsl(var(--neural-cyan-bright))",
          pink: "hsl(var(--neural-pink))",
          "pink-bright": "hsl(var(--neural-pink-bright))",
          quantum: "hsl(var(--neural-quantum))",
          plasma: "hsl(var(--neural-plasma))",
          success: "hsl(var(--neural-success))",
          "success-bright": "hsl(var(--neural-success-bright))",
          warning: "hsl(var(--neural-warning))",
          "warning-bright": "hsl(var(--neural-warning-bright))",
          danger: "hsl(var(--neural-danger))",
          "danger-bright": "hsl(var(--neural-danger-bright))",
          info: "hsl(var(--neural-info))",
          "info-bright": "hsl(var(--neural-info-bright))",
          text: "hsl(var(--neural-text))",
          "text-muted": "hsl(var(--neural-text-muted))",
          "text-dim": "hsl(var(--neural-text-dim))",
          "text-glow": "hsl(var(--neural-text-glow))",
        },
        neuro: {
          void: "hsl(var(--neuro-void))",
          dark: "hsl(var(--neuro-dark))",
          darker: "hsl(var(--neuro-darker))",
          surface: "hsl(var(--neuro-surface))",
          "surface-light": "hsl(var(--neuro-surface-light))",
          "surface-glow": "hsl(var(--neuro-surface-glow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Enhanced Neural Animations
        "neural-pulse": "neural-pulse 3s ease-in-out infinite",
        "brain-wave": "brain-wave 4s ease-in-out infinite", 
        "neural-glow": "neural-glow 2.5s ease-in-out infinite",
        "quantum-glow": "quantum-glow 3s ease-in-out infinite",
        "neuron-fire": "neuron-fire 2s ease-in-out infinite",
        "data-flow": "data-flow 2.5s ease-in-out infinite",
        "plasma-rotation": "plasma-rotation 8s linear infinite",
        "quantum-float": "quantum-float 4s ease-in-out infinite",
        "glass-shimmer": "glass-shimmer 3s ease-in-out infinite",
        "spin-slow": "spin 4s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-neural": "var(--gradient-neural)",
        "gradient-brain": "var(--gradient-brain)", 
        "gradient-success": "var(--gradient-success)",
        "gradient-warning": "var(--gradient-warning)",
        "gradient-danger": "var(--gradient-danger)",
        "gradient-quantum": "var(--gradient-quantum)",
        "gradient-plasma": "var(--gradient-plasma)",
        "glass-shimmer": "linear-gradient(90deg, transparent, hsla(var(--neural-text), 0.05), transparent)",
      },
      boxShadow: {
        "neural": "var(--neural-glow)",
        "neural-strong": "var(--neural-glow-strong)",
        "neural-glow-quantum": "var(--neural-glow-quantum)",
        "brain": "var(--brain-glow)",
        "surface": "var(--surface-shadow)",
        "glass": "var(--glass-shadow)",
        "glass-shadow": "var(--glass-shadow)",
      },
      backdropBlur: {
        "glass": "20px",
      },
      transitionTimingFunction: {
        "neural": "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
