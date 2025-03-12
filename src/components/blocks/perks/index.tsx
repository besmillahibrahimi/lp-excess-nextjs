import LPImage from "@/components/common/lp-image";
import LPRichText from "@/components/common/lp-richtext";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import GridBlock from "../grid";

export default function PerksBlock(props: Perks) {
	return (
		<section className="container mx-auto flex flex-col space-y-8 items-center py-12">
			<LPRichText richText={props.headline} />
			<ul className="flex flex-wrap gap-8 mx-auto">
				{props.partners.map((pro) => (
					<li key={pro.url} className="">
						<LPImage media={pro} className="w-24 h-24 rounded-full" />
					</li>
				))}
			</ul>
			<GridBlock {...props.discountGiveways} />
			<Link className={buttonVariants({ variant: "default" })} href={"#"}>
				Apply Now
			</Link>
		</section>
	);
}
