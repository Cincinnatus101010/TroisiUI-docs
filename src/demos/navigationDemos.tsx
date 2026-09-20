import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Link,
	Menu,
	MenuItem,
	Navbar,
	NavbarLink,
	Pagination,
	Stack,
	Stepper,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTrigger,
	Typography,
} from "@iantroisi/ui";
import { useState } from "react";
import type { ComponentDemoId } from "../componentCatalog";
import {
	CommandPaletteDemo,
	MobileNavDemo,
} from "./interactiveDemos";

export const NAVIGATION_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	link: () => <Link href="https://github.com/Cincinnatus101010/TroisiUI">GitHub</Link>,
	navbar: () => (
		<Navbar brand="Troisi">
			<NavbarLink href="#" active>
				Home
			</NavbarLink>
			<NavbarLink href="#">Docs</NavbarLink>
		</Navbar>
	),
	tabs: () => (
		<Tabs defaultValue="install">
			<TabsList aria-label="Sections">
				<TabsTrigger value="install">Install</TabsTrigger>
				<TabsTrigger value="theme">Theme</TabsTrigger>
			</TabsList>
			<TabsPanel value="install">
				<Typography variant="body">npm install @iantroisi/ui</Typography>
			</TabsPanel>
			<TabsPanel value="theme">
				<Typography variant="body">Use ThemeProvider + styles.css</Typography>
			</TabsPanel>
		</Tabs>
	),
	breadcrumb: () => (
		<Breadcrumb>
			<BreadcrumbItem>
				<Link href="#">App</Link>
			</BreadcrumbItem>
			<BreadcrumbItem>
				<Link href="#">Settings</Link>
			</BreadcrumbItem>
			<BreadcrumbItem>Profile</BreadcrumbItem>
		</Breadcrumb>
	),
	pagination: () => {
		const [page, setPage] = useState(1);
		return <Pagination page={page} totalPages={5} onPageChange={setPage} />;
	},
	stepper: () => (
		<Stepper
			steps={[
				{ label: "Account", status: "done" },
				{ label: "Details", status: "active" },
				{ label: "Review", status: "upcoming" },
			]}
		/>
	),
	menu: () => (
		<Menu trigger={<Button type="button">Actions</Button>}>
			<MenuItem>Edit</MenuItem>
			<MenuItem>Duplicate</MenuItem>
		</Menu>
	),
	"mobile-nav": () => <MobileNavDemo />,
	"command-palette": () => <CommandPaletteDemo />,
};
