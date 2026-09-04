
import { NavItem } from "@/lib/types/nav.type"

import * as React from "react"
import Link from "next/link"


import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


function NavMenuItem({
    name, href, icon, isHyperlink, components
}: NavItem) {



    return (
        <NavigationMenuItem className="font-sans">
            {
                isHyperlink ? (<NavigationMenuLink render={<Link href={href || '/'}>{name}</Link>} />
                ) : (<>
                    <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                            {components?.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </>)
            }

        </NavigationMenuItem>


    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink render={
                <Link href={href} className="hover:bg-background rounded-lg">
                    <div className="flex flex-col gap-1 text-sm">
                        <h5 className="leading-none font-medium">{title}</h5>
                        <p className="line-clamp-2 text-muted-foreground text-sm">{children}</p>
                    </div>
                </Link>
            } />
        </li>
    )
}
export default NavMenuItem

