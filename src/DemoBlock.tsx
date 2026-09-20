import { Typography } from "@iantroisi/ui";
import type { ReactNode } from "react";

export function DemoBlock({
	title,
	description,
	importLine,
	children,
}: {
	title: string;
	description: string;
	importLine: string;
	children: ReactNode;
}) {
	return (
		<section
			className="docs-section"
			id={title.toLowerCase().replace(/\s+/g, "-")}
		>
			<Typography variant="h2">{title}</Typography>
			<Typography variant="body" tone="muted">
				{description}
			</Typography>
			<pre className="docs-code">
				<code>{importLine}</code>
			</pre>
			<div className="docs-demo">{children}</div>
		</section>
	);
}
