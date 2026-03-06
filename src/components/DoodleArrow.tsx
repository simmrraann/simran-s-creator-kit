import { cn } from "@/lib/utils";

interface DoodleArrowProps {
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "curved";
}

export const DoodleArrow = ({ className, direction = "right" }: DoodleArrowProps) => {
  const arrows = {
    right: (
      <svg viewBox="0 0 100 50" className={cn("w-24 h-12", className)}>
        <path
          d="M5 25 Q 30 20, 50 25 T 85 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
          style={{ strokeDasharray: 1000, strokeDashoffset: 0 }}
        />
        <path
          d="M75 15 L 90 25 L 75 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    curved: (
      <svg viewBox="0 0 80 80" className={cn("w-20 h-20", className)}>
        <path
          d="M10 70 Q 20 20, 70 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M60 20 L 72 28 L 60 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    down: (
      <svg viewBox="0 0 50 100" className={cn("w-12 h-24", className)}>
        <path
          d="M25 5 Q 20 30, 25 50 T 25 85"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M15 75 L 25 90 L 35 75"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    up: (
      <svg viewBox="0 0 50 100" className={cn("w-12 h-24", className)}>
        <path
          d="M25 95 Q 30 70, 25 50 T 25 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M15 25 L 25 10 L 35 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    left: (
      <svg viewBox="0 0 100 50" className={cn("w-24 h-12", className)}>
        <path
          d="M95 25 Q 70 20, 50 25 T 15 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M25 15 L 10 25 L 25 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return arrows[direction];
};
