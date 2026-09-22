import { cn } from "@/lib/utils"
import Link from "next/link"

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("", className)} aria-label="Craftorus Home">
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
