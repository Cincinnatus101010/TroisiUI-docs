import { Button, Stack, Typography } from "@iantroisi/ui";
import { useNavigate } from "react-router-dom";

export function HomePage() {
	const navigate = useNavigate();

	return (
		<>
			<Typography variant="display">Troisi UI</Typography>
			<p className="docs-hero-lead">
				React 19 components with a from-scratch CSS design system — no Tailwind.
				Light, dark, system modes plus accent presets. This site is the live
				demo and documentation hub.
			</p>
			<Stack
				direction="row"
				gap={3}
				style={{ marginTop: "var(--troisi-space-6)" }}
			>
				<Button type="button" onClick={() => navigate("/components")}>
					Browse components
				</Button>
				<Button
					type="button"
					variant="secondary"
					onClick={() =>
						window.open("https://www.npmjs.com/package/@iantroisi/ui", "_blank")
					}
				>
					View on npm
				</Button>
			</Stack>
			<section className="docs-section">
				<Typography variant="h2">Quick start</Typography>
				<pre className="docs-code">
					<code>{`npm install @iantroisi/ui

import "@iantroisi/ui/styles.css";
import { Button, ThemeProvider } from "@iantroisi/ui";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="troisi-theme">
      <div className="troisi-root">
        <Button>Hello</Button>
      </div>
    </ThemeProvider>
  );
}`}</code>
				</pre>
			</section>
			<footer className="docs-footer">
				MIT © Ian Troisi ·{" "}
				<a href="https://github.com/Cincinnatus101010/TroisiUI">
					Source on GitHub
				</a>
			</footer>
		</>
	);
}
