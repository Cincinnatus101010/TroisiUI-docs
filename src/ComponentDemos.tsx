import {
	Alert,
	Button,
	Card,
	NumberInput,
	Rating,
	Stack,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTrigger,
	ToggleGroup,
	Typography,
} from "@iantroisi/ui";
import { useState } from "react";
import type { ComponentDemoId } from "./componentCatalog";

export function ComponentDemo({ id }: { id: ComponentDemoId }) {
	switch (id) {
		case "button":
			return (
				<Stack direction="row" gap={3} align="center">
					<Button>Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="ghost">Ghost</Button>
				</Stack>
			);
		case "toggle-group":
			return <ToggleGroupDemo />;
		case "rating":
			return <RatingDemo />;
		case "number-input":
			return <NumberInputDemo />;
		case "alert":
			return (
				<Stack gap={3}>
					<Alert variant="success" heading="Published">
						Your docs site is live on GitHub Pages.
					</Alert>
					<Alert variant="warning" heading="Heads up">
						Peer dependency: React 19.
					</Alert>
				</Stack>
			);
		case "card":
			return (
				<Card
					title="Card title"
					description="Use cards to group related content and actions."
				/>
			);
		case "tabs":
			return (
				<Tabs defaultValue="install">
					<TabsList aria-label="Docs sections">
						<TabsTrigger value="install">Install</TabsTrigger>
						<TabsTrigger value="theme">Theme</TabsTrigger>
					</TabsList>
					<TabsPanel value="install">
						<Typography variant="body">npm install @iantroisi/ui</Typography>
					</TabsPanel>
					<TabsPanel value="theme">
						<Typography variant="body">
							Wrap your app in ThemeProvider and import styles.css.
						</Typography>
					</TabsPanel>
				</Tabs>
			);
		default:
			return null;
	}
}

function ToggleGroupDemo() {
	const [view, setView] = useState("list");
	return (
		<ToggleGroup
			aria-label="Layout"
			value={view}
			onValueChange={setView}
			options={[
				{ value: "list", label: "List" },
				{ value: "grid", label: "Grid" },
				{ value: "board", label: "Board" },
			]}
		/>
	);
}

function RatingDemo() {
	const [stars, setStars] = useState(4);
	return (
		<Stack direction="row" gap={4} align="center">
			<Rating value={stars} onChange={setStars} />
			<Typography variant="small" tone="muted">
				{stars} of 5
			</Typography>
		</Stack>
	);
}

function NumberInputDemo() {
	const [qty, setQty] = useState(2);
	return (
		<NumberInput
			aria-label="Quantity"
			value={qty}
			onValueChange={(v) => setQty(v ?? 0)}
			min={0}
			max={99}
		/>
	);
}
