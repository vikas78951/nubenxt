"use client"

import * as React from "react"

import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { NavItem } from "@/lib/types/nav.type"
import { NAV_MOBILE_DATA } from "@/lib/data/nav.data"
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import NavMenuItem from "@/components/shared/navigation/nav-menu-item"
import { Menu, PhoneCall } from "lucide-react"


export function MobileNav() {
    const isMobile = useIsMobile()


    function handleConfirm() {
        setOpen(false)
    }
    const [open, setOpen] = React.useState(false)
    if (!isMobile) return <></>

    return (
        <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
        >
            <DrawerTrigger className={'focus:bg-transparent'} render={<Button variant="outline"><Menu /></Button>} />
            <DrawerContent>
                <DrawerHeader>

                </DrawerHeader>
                <div className="flex-1 scroll-fade overflow-y-auto ">
                    <NavigationMenu className={''}>
                        <NavigationMenuList className={'flex-col justify-start items-start'}>
                            {
                                NAV_MOBILE_DATA.map((item: NavItem, index) => {

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
                </div>
                <DrawerFooter>
                    <Button onClick={handleConfirm}>
                        <PhoneCall /> Call Us
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


export default MobileNav