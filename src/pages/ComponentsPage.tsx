import { Typography } from "@iantroisi/ui";
import { Link } from "react-router-dom";
import {
	COMPONENT_CATALOG,
	COMPONENT_CATEGORIES,
	HOOKS_AND_API,
} from "../componentCatalog";
import { ComponentDemo } from "../demos/ComponentDemo";
import { DemoBlock } from "../DemoBlock";

export function ComponentsPage() {
	return (
		<>
			<Typography variant="h1">Components</Typography>
			<Typography variant="body" tone="muted">
				Live examples for every visual component exported from{" "}
				<code>@iantroisi/ui</code>. Hooks and theme helpers are listed at the
				bottom.
			</Typography>
			{COMPONENT_CATEGORIES.map((category) => {
				const items = COMPONENT_CATALOG.filter((c) => c.category === category);
				if (items.length === 0) return null;
				return (
					<div key={category} className="docs-category">
						<Typography variant="h2" className="docs-category__title">
							{category}
						</Typography>
						<div className="docs-component-grid">
							{items.map((entry) => (
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
					</div>
				);
			})}
			<section className="docs-section">
				<Typography variant="h2">Hooks &amp; theme API</Typography>
				<Typography variant="body" tone="muted">
					These are JavaScript exports without a standalone visual demo. See the{" "}
					<Link to="/theming">Theming</Link> page for <code>useTheme</code> and{" "}
					<code>applyPreset</code>.
				</Typography>
				<pre className="docs-code">
					<code>{HOOKS_AND_API.join(", ")}</code>
				</pre>
			</section>
		</>
	);
}
