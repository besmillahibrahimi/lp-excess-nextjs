import { mediaUrl } from "@/lib/utils";
import Image from "next/image";
import EnrollmentApplicationForm from "./enrollment-application";

export default function HeroBlock({
	content,
	image,
	notice,
	background,
}: Readonly<Hero>) {
	return (
		<section style={background ? { background } : {}}>
			<div className="container flex flex-col-reverse lg:flex-row mx-auto">
				<div className="flex-1 flex flex-col justify-center space-y-3 items-center">
					<div
						className="prose"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: content }}
					/>
					<EnrollmentApplicationForm />
					<p>{notice}</p>
				</div>
				{image && (
					<Image
						className="float-none lg:float-right object-cover h-full w-full lg:max-w-1/2"
						src={mediaUrl(image.formats?.medium?.url ?? image.url)}
						alt={image.alternativeText ?? "Hero"}
						width={image.formats.medium?.width ?? image.width}
						height={image.formats.medium?.height ?? image.height}
					/>
				)}
			</div>
		</section>
	);
}
