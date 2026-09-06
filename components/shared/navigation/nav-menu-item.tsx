
import { NavItem } from "@/lib/types/nav.type"

import Link from "next/link"


import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import ActiveNavLink from "@/components/ui/active-nav-link"
import ListItem from "./list-item"


function NavMenuItem({
    name, href, icon, isHyperlink, components
}: NavItem) {



    return (
        <NavigationMenuItem className="font-sans" >
            {
                isHyperlink ? (<ActiveNavLink href={href || "/"}>
                    {name}
                </ActiveNavLink>
                ) : (<>
                    <NavigationMenuTrigger >{name}</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full p-4 xl:p-6">
                        <ul className="grid grid-cols-3 gap-4 xl:gap-6 items-stretch">
                            {components?.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    icon={component.icon}
                                    description={component.description}
                                />
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </>)
            }

        </NavigationMenuItem>


    )
}



export default NavMenuItem

