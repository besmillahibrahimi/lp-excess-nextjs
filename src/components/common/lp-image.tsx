import { mediaUrl } from "@/lib/utils";
import Image from "next/image";

export default function LPImage({
	media,
	...props
}: Readonly<
	{ media: Media } & Omit<
		React.DetailedHTMLProps<
			React.ImgHTMLAttributes<HTMLImageElement>,
			HTMLImageElement
		>,
		"height" | "width" | "loading" | "ref" | "alt" | "src" | "srcSet" | "media"
	>
>) {
	return (
		<Image
			src={mediaUrl(media.formats?.medium?.url ?? media.url)}
			alt={media.alternativeText ?? "Hero"}
			width={media.formats?.medium?.width ?? media.width}
			height={media.formats?.medium?.height ?? media.height}
			{...props}
		/>
	);
}
