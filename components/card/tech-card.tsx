import { TechonologyDataProps } from "@/lib/data/page.data"
import {
    Card,
} from "@/components/ui/card";


export const TechCard = ({ tech }: { tech: TechonologyDataProps }) => {
    const { name, badge } = tech;

    return (
        <Card className="rounded-4xl px-4 md:px-5 lg:px-5  py-2 md:py-3 xl:py-4  border border-accent ">

            <h6>{name}</h6>



        </Card>
    );
};
