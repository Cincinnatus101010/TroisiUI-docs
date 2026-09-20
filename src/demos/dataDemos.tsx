import {
	Accordion,
	Avatar,
	AvatarGroup,
	Badge,
	Blockquote,
	Card,
	Carousel,
	Chip,
	Code,
	CodeBlock,
	CopyButton,
	DescriptionItem,
	DescriptionList,
	EmptyState,
	Kbd,
	List,
	ListItem,
	Panel,
	Stat,
	Table,
	TableSortHeader,
	Tag,
	Timeline,
	TimelineItem,
	Typography,
} from "@iantroisi/ui";
import { useState } from "react";
import type { ComponentDemoId } from "../componentCatalog";

export const DATA_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	table: () => {
		const [dir, setDir] = useState<"asc" | "desc" | null>("asc");
		return (
			<Table>
				<thead>
					<tr>
						<TableSortHeader sortDirection={dir} onSort={() => setDir(dir === "asc" ? "desc" : "asc")}>
							Name
						</TableSortHeader>
						<th>Role</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Ian</td>
						<td>Author</td>
					</tr>
				</tbody>
			</Table>
		);
	},
	card: () => (
		<Card title="Card title" description="Supporting description text.">
			<Typography variant="body">Optional children.</Typography>
		</Card>
	),
	panel: () => (
		<Panel title="Usage" footer="Updated today">
			<p>Panel body</p>
		</Panel>
	),
	list: () => (
		<List>
			<ListItem>First item</ListItem>
			<ListItem>Second item</ListItem>
		</List>
	),
	badge: () => (
		<Badge variant="success">Active</Badge>
	),
	tag: () => <Tag variant="warning">Beta</Tag>,
	chip: () => <Chip onDismiss={() => {}}>Design</Chip>,
	avatar: () => <Avatar initials="IT" />,
	"avatar-group": () => (
		<AvatarGroup max={2}>
			<Avatar initials="A" />
			<Avatar initials="B" />
			<Avatar initials="C" />
		</AvatarGroup>
	),
	stat: () => <Stat label="Downloads" value="400+" />,
	timeline: () => (
		<Timeline>
			<TimelineItem>Published v0.2.0</TimelineItem>
			<TimelineItem>Docs site live</TimelineItem>
		</Timeline>
	),
	accordion: () => (
		<Accordion
			items={[
				{ id: "1", title: "What is Troisi UI?", content: "A React + CSS design system." },
				{ id: "2", title: "Peer deps?", content: "React 19." },
			]}
		/>
	),
	carousel: () => (
		<Carousel
			slides={[
				{ id: "1", content: <div>Slide 1</div> },
				{ id: "2", content: <div>Slide 2</div> },
			]}
		/>
	),
	"empty-state": () => (
		<EmptyState title="No projects" description="Create your first project to get started." />
	),
	code: () => <Code>npm i @iantroisi/ui</Code>,
	"code-block": () => <CodeBlock>{'const theme = "dark";'}</CodeBlock>,
	"copy-button": () => <CopyButton value="copied-text" label="Copy" />,
	"description-list": () => (
		<DescriptionList>
			<DescriptionItem term="Version">0.2.0</DescriptionItem>
			<DescriptionItem term="License">MIT</DescriptionItem>
		</DescriptionList>
	),
	blockquote: () => (
		<Blockquote attribution="Ian Troisi">Design systems save time.</Blockquote>
	),
	kbd: () => <Kbd>⌘K</Kbd>,
};
