
import { NavItem } from "@/lib/types/nav.type"

import Link from "next/link"


import {
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"


function MobileNavMenuItem({
    name, href, active
}: NavItem) {



    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                active={active}
                className={'font-heading text-2xl font-semibold '}
                render={<Link href={href || '/'}>{name}</Link>} />
        </NavigationMenuItem>


    )
}



export default MobileNavMenuItem

