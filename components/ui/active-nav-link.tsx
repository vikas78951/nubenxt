"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface ActiveNavLinkProps {
    href: string
    children: React.ReactNode
}

function ActiveNavLink({
    href,
    children,
}: ActiveNavLinkProps) {
    const pathname = usePathname()

    const isActive =
        pathname === href ||
        (href !== "/" && pathname.startsWith(`${href}/`))

    return (
        <NavigationMenuLink
            render={
                <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                        "relative px-4 py-0 transition-colors",
                        "hover:text-primary",
                        isActive && "text-primary font-medium"
                    )}
                >
                    {children}

                    {isActive && (
                        <span className="absolute left-4 right-4  w-4 bottom-0 h-0.5 bg-primary rounded-2xl" />
                    )}
                </Link>
            }
        />
    )
}

export default ActiveNavLink