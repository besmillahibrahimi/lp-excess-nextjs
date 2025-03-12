import LPImage from "@/components/common/lp-image";
import LPRichText from "@/components/common/lp-richtext";
import ContentBlock from "../content";

export default function BenefitsBlocks(props: Readonly<BenefitsDoc>) {
	return (
		<section className="container mx-auto flex flex-col space-y-8 items-center">
			<LPRichText richText={props.headline} />
			<div className="flex flex-col lg:flex-row gap-5">
				{props.cards.map((benefit) => (
					<ContentBlock {...benefit} key={benefit.id} />
				))}
			</div>

			<div className="flex flex-col md:flex-row gap-8 items-center mt-12">
				<LPImage className="max-w-96 h-auto" media={props.illustration} />
				<LPRichText richText={props.offerDetails} />
			</div>
		</section>
	);
}
