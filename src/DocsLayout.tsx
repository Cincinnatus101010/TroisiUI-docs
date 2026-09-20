import {
	Button,
	Select,
	ThemeProvider,
	ThemeToggle,
	TROISI_PRESETS,
	type TroisiPreset,
	Typography,
	useTheme,
} from "@iantroisi/ui";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const PRESET_LABELS: Record<TroisiPreset, string> = {
	default: "Default",
	ocean: "Ocean",
	forest: "Forest",
	rose: "Rose",
	"high-contrast": "High contrast",
};

function DocsChrome({ children }: { children: ReactNode }) {
	const { preset, setPreset } = useTheme();

	return (
		<div className="docs-shell">
			<aside className="docs-sidebar">
				<NavLink to="/" className="docs-brand" end>
					Troisi UI
				</NavLink>
				<Typography variant="caption" tone="muted">
					@iantroisi/ui
				</Typography>
				<nav className="docs-nav" aria-label="Documentation">
					<NavLink to="/" end>
						Overview
					</NavLink>
					<NavLink to="/components">Components</NavLink>
					<NavLink to="/theming">Theming</NavLink>
				</nav>
				<Typography variant="small" tone="muted">
					Accent preset
				</Typography>
				<Select
					aria-label="Accent preset"
					value={preset}
					onChange={(e) => setPreset(e.target.value as TroisiPreset)}
				>
					{TROISI_PRESETS.map((p) => (
						<option key={p} value={p}>
							{PRESET_LABELS[p]}
						</option>
					))}
				</Select>
			</aside>
			<main className="docs-main">
				<div className="docs-toolbar">
					<ThemeToggle includeSystem />
					<Button
						variant="secondary"
						size="sm"
						onClick={() =>
							window.open(
								"https://www.npmjs.com/package/@iantroisi/ui",
								"_blank",
							)
						}
					>
						npm
					</Button>
					<Button
						variant="secondary"
						size="sm"
						onClick={() =>
							window.open(
								"https://github.com/Cincinnatus101010/TroisiUI",
								"_blank",
							)
						}
					>
						GitHub
					</Button>
				</div>
				<div className="docs-content">{children}</div>
			</main>
		</div>
	);
}

export function DocsLayout({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider defaultTheme="system" storageKey="troisi-docs-theme">
			<DocsChrome>{children}</DocsChrome>
		</ThemeProvider>
	);
}
