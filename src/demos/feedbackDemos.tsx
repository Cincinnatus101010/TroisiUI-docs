import {
	Alert,
	Banner,
	Button,
	Callout,
	Popover,
	Progress,
	Skeleton,
	Spinner,
	Stack,
	Tooltip,
} from "@iantroisi/ui";
import type { ComponentDemoId } from "../componentCatalog";
import { DrawerDemo, ModalDemo, ToastDemo } from "./interactiveDemos";

export const FEEDBACK_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	alert: () => (
		<Stack gap={3}>
			<Alert variant="success" heading="Published">
				Deployment succeeded.
			</Alert>
			<Alert variant="warning" heading="Note">
				Requires React 19.
			</Alert>
		</Stack>
	),
	banner: () => <Banner variant="info">Ship week is live — check the changelog.</Banner>,
	callout: () => <Callout title="Tip">Use AppShell for dashboard layouts.</Callout>,
	spinner: () => <Spinner label="Loading" />,
	skeleton: () => <Skeleton variant="block" />,
	progress: () => <Progress value={45} max={100} />,
	modal: () => <ModalDemo />,
	drawer: () => <DrawerDemo />,
	toast: () => <ToastDemo />,
	tooltip: () => (
		<Tooltip tooltip="More information">
			<Button type="button">Hover me</Button>
		</Tooltip>
	),
	popover: () => (
		<Popover trigger={<Button type="button">Open popover</Button>}>
			<p>Popover content</p>
		</Popover>
	),
};
