import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Enhanced Neural Interface Variants
        neural: "bg-gradient-neural text-neural-text-glow hover:shadow-neural-strong transform hover:scale-110 transition-all duration-500 shadow-neural backdrop-blur-md border border-neural-blue/20 hover:border-neural-blue/50 relative overflow-hidden before:absolute before:inset-0 before:bg-glass-shimmer hover:before:animate-glass-shimmer",
        brain: "bg-gradient-brain text-neural-text-glow hover:shadow-brain transform hover:scale-110 transition-all duration-500 shadow-neural backdrop-blur-md border border-neural-cyan/20 hover:border-neural-cyan/50 relative overflow-hidden",
        success: "bg-gradient-success text-neural-text-glow hover:shadow-lg transform hover:scale-110 transition-all duration-500 backdrop-blur-md border border-neural-success/30 hover:border-neural-success/60",
        warning: "bg-gradient-warning text-neural-text-glow hover:shadow-lg transform hover:scale-110 transition-all duration-500 backdrop-blur-md border border-neural-warning/30 hover:border-neural-warning/60", 
        danger: "bg-gradient-danger text-neural-text-glow hover:shadow-lg transform hover:scale-110 transition-all duration-500 backdrop-blur-md border border-neural-danger/30 hover:border-neural-danger/60",
        neuroglow: "bg-neuro-surface/80 border-2 border-neural-blue/50 text-neural-blue-bright hover:bg-neural-blue/20 hover:text-neural-text-glow transform hover:scale-110 transition-all duration-500 shadow-neural backdrop-blur-lg hover:shadow-neural-strong",
        chip: "bg-neuro-surface-light/60 border border-neural-cyan/40 text-neural-cyan-bright hover:bg-neural-cyan/10 hover:text-neuro-dark transform hover:scale-110 transition-all duration-500 backdrop-blur-lg shadow-glass-shadow hover:border-neural-cyan/70",
        quantum: "bg-gradient-quantum text-neural-text-glow hover:shadow-neural-glow-quantum transform hover:scale-110 transition-all duration-500 backdrop-blur-md border border-neural-quantum/30 hover:border-neural-quantum/60 quantum-glow",
        plasma: "bg-gradient-plasma text-neural-text-glow hover:shadow-brain transform hover:scale-110 transition-all duration-500 backdrop-blur-md border border-neural-plasma/30 hover:border-neural-plasma/60 plasma-rotation",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
