import {
	AppShell,
	Box,
	Button,
	Center,
	Container,
	Divider,
	Footer,
	Grid,
	Hero,
	Navbar,
	PageHeader,
	Section,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarItem,
	SidebarSection,
	Spacer,
	Stack,
	Toolbar,
	Typography,
} from "@iantroisi/ui";
import type { ComponentDemoId } from "../componentCatalog";

export const LAYOUT_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	"app-shell": () => (
		<div style={{ maxHeight: "14rem", overflow: "hidden", borderRadius: "0.75rem" }}>
			<AppShell
				navbar={<Navbar brand="Acme">App</Navbar>}
				sidebar={
					<Sidebar>
						<SidebarItem href="#" active>
							Dashboard
						</SidebarItem>
					</Sidebar>
				}
			>
				<Typography variant="body">Main content area</Typography>
			</AppShell>
		</div>
	),
	box: () => (
		<Box padding={4} bordered elevated rounded>
			<Typography variant="body">Box content</Typography>
		</Box>
	),
	center: () => <Center style={{ minHeight: "4rem" }}>Centered</Center>,
	container: () => (
		<Container>
			<Typography variant="body">Inside container max-width</Typography>
		</Container>
	),
	grid: () => (
		<Grid cols={2}>
			<Box padding={3} bordered>
				A
			</Box>
			<Box padding={3} bordered>
				B
			</Box>
		</Grid>
	),
	stack: () => (
		<Stack gap={2}>
			<Typography variant="body">Row one</Typography>
			<Typography variant="body">Row two</Typography>
		</Stack>
	),
	divider: () => (
		<Stack gap={3}>
			<Typography variant="body">Above</Typography>
			<Divider />
			<Typography variant="body">Below</Typography>
		</Stack>
	),
	spacer: () => (
		<>
			<Typography variant="body">Top</Typography>
			<Spacer size={6} />
			<Typography variant="body">Bottom</Typography>
		</>
	),
	section: () => (
		<Section title="Settings" description="Manage your preferences.">
			<Typography variant="body">Section body</Typography>
		</Section>
	),
	"page-header": () => (
		<PageHeader
			title="Billing"
			description="Invoices and payment methods"
			actions={
				<Button type="button" size="sm">
					Add card
				</Button>
			}
		/>
	),
	hero: () => (
		<Hero
			eyebrow="Troisi UI"
			title="Build faster"
			description="React components with a from-scratch CSS design system."
			actions={<Button type="button">Get started</Button>}
		/>
	),
	footer: () => <Footer brand="Troisi">© 2026 Ian Troisi</Footer>,
	toolbar: () => (
		<Toolbar>
			<Button type="button" size="sm" variant="secondary">
				Edit
			</Button>
			<Button type="button" size="sm">
				Publish
			</Button>
		</Toolbar>
	),
	sidebar: () => (
		<Sidebar>
			<SidebarHeader>Studio</SidebarHeader>
			<SidebarContent>
				<SidebarSection title="Main">
					<SidebarItem href="#" active>
						Home
					</SidebarItem>
					<SidebarItem href="#">Projects</SidebarItem>
				</SidebarSection>
			</SidebarContent>
			<SidebarFooter>v0.2.0</SidebarFooter>
		</Sidebar>
	),
};
