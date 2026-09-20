import {
	Button,
	Card,
	Stack,
	TROISI_PRESET_ATTR,
	TROISI_PRESETS,
	TROISI_THEME_ATTR,
	type TroisiPreset,
	Typography,
	useTheme,
} from "@iantroisi/ui";

const PRESET_LABELS: Record<TroisiPreset, string> = {
	default: "Default",
	ocean: "Ocean",
	forest: "Forest",
	rose: "Rose",
	"high-contrast": "High contrast",
};

function PresetSwatches() {
	const { preset, setPreset } = useTheme();

	return (
		<div className="docs-preset-grid">
			{TROISI_PRESETS.map((p) => (
				<Button
					key={p}
					variant={preset === p ? "primary" : "secondary"}
					size="sm"
					onClick={() => setPreset(p)}
				>
					{PRESET_LABELS[p]}
				</Button>
			))}
		</div>
	);
}

export function ThemingPage() {
	return (
		<>
			<Typography variant="h1">Theming</Typography>
			<Typography variant="body" tone="muted">
				Color mode and accent presets are CSS-token driven. Use the sidebar
				preset selector and theme toggle above to preview combinations live.
			</Typography>

			<section className="docs-section">
				<Typography variant="h2">Color mode</Typography>
				<Typography variant="body" tone="muted">
					<code>{TROISI_THEME_ATTR}</code> on <code>&lt;html&gt;</code> or{" "}
					<code>.troisi-root</code> controls light, dark, or system (default).
				</Typography>
				<pre className="docs-code">
					<code>{`<ThemeProvider defaultTheme="system" storageKey="troisi-theme">
  <body className="troisi-root">{children}</body>
</ThemeProvider>`}</code>
				</pre>
			</section>

			<section className="docs-section">
				<Typography variant="h2">Accent presets</Typography>
				<Typography variant="body" tone="muted">
					Set <code>{TROISI_PRESET_ATTR}</code> to override primary and focus
					tokens. Presets: {TROISI_PRESETS.join(", ")}.
				</Typography>
				<PresetSwatches />
				<Stack gap={4} style={{ marginTop: "var(--troisi-space-6)" }}>
					<Card
						title="Preset-aware primary"
						description="Buttons and links pick up --troisi-primary from the active preset."
					>
						<Button>Primary action</Button>
					</Card>
				</Stack>
				<pre className="docs-code">
					<code>{`const { preset, setPreset } = useTheme();
setPreset("ocean"); // persisted when presetStorageKey / storageKey is set`}</code>
				</pre>
			</section>
		</>
	);
}
