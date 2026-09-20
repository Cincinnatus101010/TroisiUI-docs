import { Typography } from "@iantroisi/ui";
import type { ComponentDemoId } from "../componentCatalog";
import { DATA_DEMOS } from "./dataDemos";
import { FEEDBACK_DEMOS } from "./feedbackDemos";
import { FORM_DEMOS } from "./formDemos";
import { LAYOUT_DEMOS } from "./layoutDemos";
import { NAVIGATION_DEMOS } from "./navigationDemos";
import {
	MEDIA_DEMOS,
	TYPOGRAPHY_DEMOS,
	UTILITY_DEMOS,
} from "./mediaAndUtilityDemos";

const ALL_DEMOS: Partial<Record<ComponentDemoId, () => React.JSX.Element>> = {
	...TYPOGRAPHY_DEMOS,
	...LAYOUT_DEMOS,
	...FORM_DEMOS,
	...NAVIGATION_DEMOS,
	...FEEDBACK_DEMOS,
	...DATA_DEMOS,
	...MEDIA_DEMOS,
	...UTILITY_DEMOS,
};

export function ComponentDemo({ id }: { id: ComponentDemoId }) {
	const Demo = ALL_DEMOS[id];
	if (!Demo) {
		return (
			<Typography variant="body" tone="muted">
				Demo not available.
			</Typography>
		);
	}
	return <Demo />;
}
