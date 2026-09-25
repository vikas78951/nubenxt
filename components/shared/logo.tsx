import { cn } from "@/lib/utils"
import Link from "next/link"
import LogoIcon from "@/components/shared/logo-icon"

interface LogoProps {
  className?: string
  showIcon?: boolean
}

const Logo = ({ className, showIcon = false }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Craftorus Home"
    >
      {showIcon && <LogoIcon className="h-9 w-9 shrink-0" />}
      <div>
        <span className="font-heading text-4xl font-bold tracking-wider">
          Craft<span className="text-primary">orus</span>
        </span>
        <span className="block h-1 w-12 rounded-lg bg-primary" />
      </div>
    </Link>
  )
}

export default Logo
