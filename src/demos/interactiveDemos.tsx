import {
	Button,
	CommandPalette,
	Drawer,
	Lightbox,
	MobileNav,
	Modal,
	SidebarItem,
	ToastProvider,
	useToast,
} from "@iantroisi/ui";
import { useState } from "react";

export function ModalDemo() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button type="button" onClick={() => setOpen(true)}>
				Open modal
			</Button>
			<Modal open={open} title="Confirm" onClose={() => setOpen(false)}>
				<p>Modal body content.</p>
			</Modal>
		</>
	);
}

export function DrawerDemo() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button type="button" variant="secondary" onClick={() => setOpen(true)}>
				Open drawer
			</Button>
			<Drawer open={open} title="Filters" onClose={() => setOpen(false)}>
				<p>Drawer content.</p>
			</Drawer>
		</>
	);
}

export function ToastDemo() {
	function Trigger() {
		const { toast } = useToast();
		return (
			<Button type="button" onClick={() => toast("Saved successfully")}>
				Show toast
			</Button>
		);
	}
	return (
		<ToastProvider>
			<Trigger />
		</ToastProvider>
	);
}

export function CommandPaletteDemo() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button type="button" variant="secondary" onClick={() => setOpen(true)}>
				Open command palette
			</Button>
			<CommandPalette
				open={open}
				onClose={() => setOpen(false)}
				items={[
					{ id: "home", label: "Go home" },
					{ id: "settings", label: "Settings" },
				]}
			/>
		</>
	);
}

export function LightboxDemo() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button type="button" onClick={() => setOpen(true)}>
				Preview image
			</Button>
			<Lightbox
				open={open}
				src="https://picsum.photos/seed/troisi/800/600"
				alt="Sample"
				onClose={() => setOpen(false)}
			/>
		</>
	);
}

export function MobileNavDemo() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button type="button" variant="secondary" onClick={() => setOpen(true)}>
				Open mobile nav
			</Button>
			<MobileNav open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
				<SidebarItem href="#">Home</SidebarItem>
				<SidebarItem href="#">Docs</SidebarItem>
			</MobileNav>
		</>
	);
}
