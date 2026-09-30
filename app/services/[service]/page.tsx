import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { servicePagesData, ServicePageDataProps } from "@/lib/data/service.data"
import { Service } from "@/lib/types/shared.type"

import Atf from "@/components/page-components/hero/service-hero"
import Methodology from "@/components/page-components/methodology"
import Solution from "@/components/page-components/solution"
import Benefits from "@/components/page-components/benefits"
import Pricing from "@/components/page-components/pricing"
import Faq from "@/components/page-components/faq"
import Footer from "@/components/layout/footer"

export async function generateStaticParams() {
  return Object.values(Service).map((service) => ({
    service,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service } = await params

  if (!Object.values(Service).includes(service as Service)) {
    return {}
  }

  const page: ServicePageDataProps = servicePagesData[service as Service]
  if (!page) return {}

  return {
    title: `${page.title} Services`,
    description: page.hero.description,
    openGraph: {
      title: `${page.title} Services`,
      description: page.hero.description,
      url: `https://www.craftorus.com/services/${service}`,
    },
  }
}

const ServicePage = async ({
    params,
}: {
    params: Promise<{ service: string }>
}) => {
    const { service } = await params

    if (!Object.values(Service).includes(service as Service)) {
        notFound()
    }

    const page: ServicePageDataProps = servicePagesData[service as Service]

    return <>

        <Atf content={page.hero} stack={page.stack} />
        <Solution content={page.solutions} />
        <Methodology content={page.methodology} />
        <Benefits content={page.benefits} />
        <Pricing content={page.pricing} />
        <Faq content={page.faqs}/>
        <Footer/>

    </>
}

export default ServicePage
