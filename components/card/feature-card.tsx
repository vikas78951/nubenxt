import { FeaturedDataProps } from "@/lib/data/page.data"
import {
  Card,
} from "@/components/ui/card";

export const FeatureCard = ({ feature }: { feature: FeaturedDataProps }) => {
  const { title, description } = feature;

  return (
    <Card className="flex flex-col gap-6 p-4 sm:p-5 md:p-4 lg:flex-row lg:items-center lg:gap-8 lg:p-6 xl:p-8 rounded-sm">

      {/* Content */}
      <div className="min-w-0 flex-1">
        <header className="flex items-center gap-3 lg:gap-4">
          <span className="h-1.5 w-1.5 block rounded-2xl bg-primary" />
          <h6>{title}</h6>
        </header>

        <p className="py-3 md:py-4 lg:py-5 xl:py-6">
          {description}
        </p>

      
      </div>
    </Card>
  );
};