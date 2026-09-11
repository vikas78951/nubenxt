import {
  Card,
} from "@/components/ui/card";

export const NumberFeatureCard = ({ data }: { data: { id: string | number, title: string, description: string } }) => {
  const { id, title, description } = data;

  return (
    <Card key={id} className="flex flex-col gap-6 p-4 sm:p-5 md:p-4 lg:flex-row lg:items-center lg:gap-8 lg:p-6 xl:p-8 rounded-sm border-0 border-b bg-background ring-0">

      {/* Content */}
      <div className="min-w-0 flex-1">
        <span className="text-sm font-heading font-bold text-primary" >{id}</span>

        <header className=" py-2">
          <h6>{title}</h6>
        </header>

        <p className="text-sm">
          {description}
        </p>


      </div>
    </Card>
  );
};