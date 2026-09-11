import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import type { Faq } from '@/lib/data/service.data'

const FaqList = ({ item }: { item: Faq }) => {
    return (
        <AccordionItem value={item.question} className='border-b'>
            <AccordionTrigger className='text-left hover:no-underline'>
                <h5>{item.question}</h5>
            </AccordionTrigger>
            <AccordionContent>
                <p className='max-w-3xl text-muted-foreground'>
                    {item.answer}
                </p>
            </AccordionContent>
        </AccordionItem>
    )
}

export default FaqList