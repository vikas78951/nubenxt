
import { NavItem } from "@/lib/types/nav.type"

import Link from "next/link"


import {
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "cn"


function MobileNavMenuItem({
    name, href, active
}: NavItem) {



    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                render={(
                    <div>
                        <Link className={cn(
                            "relative font-heading text-2xl font-semibold  capitalize text-muted-foreground",
                            active && "text-primary font-medium"
                        )} href={href || '/'}>{name}</Link>
                        {active && (
                            <span className="absolute left-4 right-4  w-4 -bottom-1 h-1 bg-primary rounded-2xl" />
                        )}
                    </div>
                )}
            />



        </NavigationMenuItem>


    )
}



export default MobileNavMenuItem

