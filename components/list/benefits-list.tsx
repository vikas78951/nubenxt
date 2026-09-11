import {
    Card,
} from "@/components/ui/card";

const BenefitList = ({ data }: { data: string }) => {

    return (
        <Card className="flex flex-col lg:flex-row  lg:items-center  rounded-none border-b ring-0  p-0 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8  gap-3 lg:gap-4 bg-transparent">

            {/* Content */}
            <div className="min-w-0 flex  items-center">
             <span className="h-1.5 w-1.5 block mr-4 bg-primary rounded-lg "/>  <h6>{data}</h6>
            </div>


        </Card>
    );
};

export default BenefitList