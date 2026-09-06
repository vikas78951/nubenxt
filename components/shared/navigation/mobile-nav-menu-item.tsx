
import { NavItem } from "@/lib/types/nav.type"

import Link from "next/link"


import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import ListItem from "./list-item"


function MobileNavMenuItem({
    name, href, icon, isHyperlink, components
}: NavItem) {



    return (
        <NavigationMenuItem>
            <NavigationMenuLink className={'font-heading text-2xl font-semibold '} render={<Link href={href || '/'}>{name}</Link>} />
        </NavigationMenuItem>


    )
}



export default MobileNavMenuItem

