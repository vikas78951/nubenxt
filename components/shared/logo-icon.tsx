import { cn } from "@/lib/utils"

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#09090b" />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="7.5"
        stroke="#ffffff"
        strokeOpacity="0.12"
      />
      <text
        x="16"
        y="13.5"
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="17"
        fontWeight="900"
        textAnchor="middle"
        dominantBaseline="central"
      >
        C
      </text>
      <rect x="9" y="23" width="14" height="2.5" rx="1.25" fill="#22c55e" />
    </svg>
  )
}

export default LogoIcon
