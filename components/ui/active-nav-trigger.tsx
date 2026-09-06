"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface ActiveNavTriggerProps {
    href: string
    children: React.ReactNode
}

function ActiveNavTrigger({
    href,
    children,
}: ActiveNavTriggerProps) {
    const pathname = usePathname()

    const isActive =
        pathname === href ||
        (href !== "/" && pathname.startsWith(`${href}/`))

    return (
        <NavigationMenuTrigger
            className={cn(
                "relative",
                isActive && "text-primary font-medium"
            )}
        >
            {children}

            {isActive && (
                <span className="absolute left-4 right-4  w-4 bottom-0 h-1 bg-primary rounded-2xl" />
            )}
        </NavigationMenuTrigger>
    )
}

export default ActiveNavTrigger