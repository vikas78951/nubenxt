
import Logo from "@/components/shared/logo"
import DesktopNav from "@/components/shared/desktop-nav"
import MobileNav from "@/components/shared/mobile-nav"
import Section from "@/components/shared/section"
import Wrapper from "@/components/shared/wrapper"
import { Button } from "@/components/ui/button"


export default function Header() {
  return (
    <div className="flex ">
      <header className="w-full py-6 border-b h-20" >

        <Section>
          <Wrapper className="flex justify-between items-center">
            <Logo />
            <DesktopNav />
            <Button variant={'outline'} className={'hidden lg:block border-primary! bg-transparent!  text-primary hover:text-primary-foreground! hover:bg-primary! '} >
              Start a Project
            </Button>
            <MobileNav />
          </Wrapper>

        </Section>

      </header>
    </div>
  )
}
