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
import MobileNavMenuItem from "@/components/shared/navigation/mobile-nav-menu-item"
import { ArrowRight, Menu, PhoneCall } from "lucide-react"
import { Marker } from "../markers/marker"


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
                    <Marker className="py-4" title="NAVITATION MENU" />
                </DrawerHeader>
                <div className="flex-1 scroll-fade overflow-y-auto ">
                    <NavigationMenu className={''}>
                        <NavigationMenuList className={'flex-col gap-4 justify-start items-start'}>
                            {
                                NAV_MOBILE_DATA.map((item: NavItem, index) => {

                                    return <MobileNavMenuItem
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
                    <hr />
                    <div className="pt-3 pb-10">
                        <div className="mb-6 ">
                            <p className="body-3 mb-2">Have a vision for your infrastructure?</p>
                            <h6 className="heading-8">Let's construct something robust.</h6>
                        </div>
                        <Button onClick={handleConfirm} className={'uppercase py-4 h-auto w-full font-semibold    '}>
                            Start a Project <ArrowRight className="ml-3  size-4 " />
                        </Button>
                    </div>

                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


export default MobileNav