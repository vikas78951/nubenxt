import React from "react";
import type { InsightsDataProps } from "@/lib/data/page.data";
import {
    Card,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";

const InsightList = ({ insight }: { insight: InsightsDataProps }) => {
    const { id, category, title, description, readMoreLink } = insight;

    return (
        <Card className="flex flex-col lg:flex-row  lg:items-center bg-background rounded-none border-b ring-0  p-0 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8  gap-3 lg:gap-4 ">

            {/* Content */}
            <div className="min-w-0 flex-1">
                <Badge variant={'ghost'}   className="text-xs p-0 mb-2 text-primary font-bold">{category}</Badge>
                <h5>{title}</h5>
            </div>

            {/* cta */}
            <div>
                <a className="flex items-center gap-2 uppercase text-xs font-bold" href={readMoreLink}>
                    read more <ArrowRight className="" size={'15'} />
                </a>
            </div>
        </Card>
    );
};

export default InsightList