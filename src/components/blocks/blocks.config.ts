import dynamic from "next/dynamic";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const blockComponents: Record<string, React.ComponentType<any>> = {
	"common.hero": dynamic(() => import("./hero")),
	"common.content": dynamic(() => import("./content")),
	"common.grid": dynamic(() => import("./grid")),
	"common.fa-qs": dynamic(() => import("./faqs")),
	"landing.benefits": dynamic(() => import("./benefits")),
	"landing.qualify": dynamic(() => import("./qualify")),
	"landing.perks": dynamic(() => import("./perks")),
};
