import { cn } from "@/lib/utils";

export default function LPRichText({
	richText,
	className,
	...props
}: Readonly<{ richText: string } & React.ComponentProps<"div">>) {
	return (
		<div
			className={cn("prose", className)}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{ __html: richText }}
			{...props}
		/>
	);
}
