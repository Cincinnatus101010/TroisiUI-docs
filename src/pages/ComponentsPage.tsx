import { Typography } from "@iantroisi/ui";
import { ComponentDemo } from "../ComponentDemos";
import { COMPONENT_CATALOG } from "../componentCatalog";
import { DemoBlock } from "../DemoBlock";

export function ComponentsPage() {
	return (
		<>
			<Typography variant="h1">Components</Typography>
			<Typography variant="body" tone="muted">
				Live examples from the library. The full export list is in the package
				README — this page highlights common patterns and the newest additions.
			</Typography>
			<div className="docs-component-grid">
				{COMPONENT_CATALOG.map((entry) => (
					<DemoBlock
						key={entry.id}
						title={entry.name}
						description={entry.description}
						importLine={entry.importLine}
					>
						<ComponentDemo id={entry.id} />
					</DemoBlock>
				))}
			</div>
		</>
	);
}
