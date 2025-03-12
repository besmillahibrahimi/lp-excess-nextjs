import LPRichText from "@/components/common/lp-richtext";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function QualifyBlock(props: FAQs) {
	return (
		<section className="container mx-auto w-full flex flex-col space-y-8 items-center py-12">
			<LPRichText richText={props.description} />
			<Accordion type="single" collapsible className="w-full md:w-1/2">
				{props.faqs.map((faq, i) => (
					<AccordionItem
						className="w-full"
						value={`faq-${i + 1}`}
						key={`faq-${i + 1}`}
					>
						<AccordionTrigger>
							<LPRichText richText={faq.question} />
						</AccordionTrigger>
						<AccordionContent>
							<LPRichText richText={faq.response} />
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
