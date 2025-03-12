import LPImage from "@/components/common/lp-image";
import LPRichText from "@/components/common/lp-richtext";
import { buttonVariants } from "@/components/ui/button";
import { mediaUrl } from "@/lib/utils";
import Link from "next/link";

export default function QualifyBlock(props: Qualify) {
	return (
		<section
			className="container mx-auto flex flex-col space-y-8 items-center py-12"
			style={{
				backgroundImage: `url(${mediaUrl(props.background.url)})`,
				backgroundPosition: "left center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "auto 90%",
			}}
		>
			<LPRichText richText={props.headline} />
			<ul className="flex flex-wrap gap-8 mx-auto md:max-w-[40rem]">
				{props.programs.map((pro) => (
					<li key={pro.url} className="">
						<LPImage media={pro} className="w-24 h-24 rounded-full" />
					</li>
				))}
			</ul>
			<Link className={buttonVariants({ variant: "default" })} href={"#"}>
				Apply Now
			</Link>
		</section>
	);
}
