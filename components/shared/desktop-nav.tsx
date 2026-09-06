
import { NavItem } from "@/lib/types/nav.type"
import { NAV_DATA } from "@/lib/data/nav.data"
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import NavMenuItem from "@/components/shared/navigation/nav-menu-item"


function DesktopNav() {
    return (
        <NavigationMenu className={'hidden lg:flex'} >
            <NavigationMenuList>
                {
                    NAV_DATA.map((item: NavItem, index) => {

                        return <NavMenuItem
                            key={`nav-${item.name}-${index}`}
                            name={item?.name}
                            href={item?.href}
                            icon={item?.icon}
                            isHyperlink={item?.isHyperlink}
                            components={item?.components}
                        />
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default DesktopNav

