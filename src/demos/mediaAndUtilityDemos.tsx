import {
	Icon,
	Image,
	ScrollArea,
	ThemeToggle,
	Typography,
	Video,
	VisuallyHidden,
} from "@iantroisi/ui";
import type { ComponentDemoId } from "../componentCatalog";
import { LightboxDemo } from "./interactiveDemos";

export const TYPOGRAPHY_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	typography: () => (
		<>
			<Typography variant="display">Display</Typography>
			<Typography variant="h2">Heading</Typography>
			<Typography variant="body">Body text with relaxed leading.</Typography>
			<Typography variant="caption" tone="muted">
				Caption
			</Typography>
			<Typography variant="code">inline code</Typography>
		</>
	),
};

export const MEDIA_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	image: () => (
		<Image
			src="https://picsum.photos/seed/troisi/240/140"
			alt="Sample"
			width={240}
			height={140}
		/>
	),
	video: () => <Video aria-label="Demo clip" />,
	lightbox: () => <LightboxDemo />,
};

export const UTILITY_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	icon: () => (
		<Icon size="md" label="Status">
			<svg viewBox="0 0 16 16" aria-hidden>
				<title>Status</title>
				<circle cx="8" cy="8" r="6" fill="currentColor" />
			</svg>
		</Icon>
	),
	"scroll-area": () => (
		<ScrollArea style={{ maxHeight: "5rem" }}>
			<p>Line 1</p>
			<p>Line 2</p>
			<p>Line 3</p>
			<p>Line 4</p>
			<p>Line 5</p>
		</ScrollArea>
	),
	"visually-hidden": () => (
		<>
			<VisuallyHidden>Hidden from sighted users</VisuallyHidden>
			<Typography variant="small" tone="muted">
				(Screen reader text is present in the DOM.)
			</Typography>
		</>
	),
	"theme-toggle": () => <ThemeToggle includeSystem />,
};
