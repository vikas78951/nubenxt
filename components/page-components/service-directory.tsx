import Link from "next/link"
import Wrapper from "../shared/wrapper"
import Section from "../shared/section"
import { Marker } from "../markers/marker"
import { service } from "@/lib/data/nav.data"
import { Card } from "../ui/card"
import { ArrowRight } from "lucide-react"

export const ServiceDirectory = () => {
  return (
    <Section className="bg-secondary/40">
      <Wrapper>
        <div>
          <Marker title="02" description="Specialized Solutions" variant="mix" />
          <h3 className="pt-3 pb-2 md:pt-4 lg:pt-5 lg:pb-3 xl:pt-6 xl:pb-4">
            Specialized Digital Services
          </h3>
          <p className="max-w-2xl">
            Explore our focused service capabilities, each tailored with dedicated
            tooling, architecture, and engineering standards for maximum performance.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:mt-12 lg:grid-cols-3 xl:gap-8">
          {service.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col"
              >
                <Card className="flex flex-1 flex-col justify-between p-6 transition-all duration-300 hover:border-primary/50 hover:bg-background">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {Icon && <Icon className="size-6" />}
                    </div>
                    <h4 className="mt-5 text-lg font-bold transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase text-primary">
                    Explore Solution
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </Wrapper>
    </Section>
  )
}

export default ServiceDirectory
