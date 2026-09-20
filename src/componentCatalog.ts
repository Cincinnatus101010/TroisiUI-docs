export type ComponentDemoId =
	| "button"
	| "toggle-group"
	| "rating"
	| "number-input"
	| "alert"
	| "card"
	| "tabs";

export interface ComponentEntry {
	id: ComponentDemoId;
	name: string;
	category: string;
	description: string;
	importLine: string;
}

export const COMPONENT_CATALOG: ComponentEntry[] = [
	{
		id: "button",
		name: "Button",
		category: "Forms",
		description: "Primary actions with size and variant options.",
		importLine: 'import { Button } from "@iantroisi/ui";',
	},
	{
		id: "toggle-group",
		name: "ToggleGroup",
		category: "Forms",
		description: "Segmented single-choice control for view modes and filters.",
		importLine: 'import { ToggleGroup } from "@iantroisi/ui";',
	},
	{
		id: "rating",
		name: "Rating",
		category: "Forms",
		description: "Star rating input with keyboard and hover preview.",
		importLine: 'import { Rating } from "@iantroisi/ui";',
	},
	{
		id: "number-input",
		name: "NumberInput",
		category: "Forms",
		description: "Numeric field with stepper buttons and min/max clamping.",
		importLine: 'import { NumberInput } from "@iantroisi/ui";',
	},
	{
		id: "alert",
		name: "Alert",
		category: "Feedback",
		description: "Inline status messages for success, warning, and danger.",
		importLine: 'import { Alert } from "@iantroisi/ui";',
	},
	{
		id: "card",
		name: "Card",
		category: "Data",
		description: "Elevated surface for grouped content.",
		importLine: 'import { Card } from "@iantroisi/ui";',
	},
	{
		id: "tabs",
		name: "Tabs",
		category: "Navigation",
		description: "Tabbed panels for switching related views.",
		importLine:
			'import { Tabs, TabsList, TabsTrigger, TabsPanel } from "@iantroisi/ui";',
	},
];
