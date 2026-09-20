import {
	Button,
	ButtonGroup,
	Checkbox,
	ColorInput,
	Combobox,
	DateInput,
	FieldError,
	FieldHelper,
	Fieldset,
	FileInput,
	Form,
	FormField,
	Input,
	InputGroup,
	Label,
	NumberInput,
	Radio,
	RadioGroup,
	Rating,
	SearchInput,
	Select,
	Slider,
	Stack,
	Switch,
	Textarea,
	ToggleGroup,
	Typography,
} from "@iantroisi/ui";
import { useState } from "react";
import type { ComponentDemoId } from "../componentCatalog";

export function ToggleGroupDemo() {
	const [view, setView] = useState("list");
	return (
		<Stack gap={3}>
			<ToggleGroup
				aria-label="Layout"
				value={view}
				onValueChange={setView}
				options={[
					{ value: "list", label: "List" },
					{ value: "grid", label: "Grid" },
					{ value: "board", label: "Board" },
				]}
			/>
			<ToggleGroup
				aria-label="Uncontrolled layout"
				defaultValue="day"
				options={[
					{ value: "day", label: "Day" },
					{ value: "week", label: "Week" },
				]}
			/>
			<Typography variant="small" tone="muted">
				Selected: {view}
			</Typography>
		</Stack>
	);
}

export function RatingDemo() {
	const [stars, setStars] = useState(4);
	return (
		<Stack direction="row" gap={4} align="center">
			<Rating value={stars} onChange={setStars} />
			<Rating defaultValue={2} readOnly />
			<Typography variant="small" tone="muted">
				{stars} of 5
			</Typography>
		</Stack>
	);
}

export function NumberInputDemo() {
	const [qty, setQty] = useState<number | undefined>(2);
	return (
		<Stack gap={2}>
			<NumberInput
				aria-label="Quantity"
				value={qty}
				onValueChange={setQty}
				min={0}
				max={99}
			/>
			<Typography variant="small" tone="muted">
				Value: {qty ?? "empty"}
			</Typography>
		</Stack>
	);
}

export const FORM_DEMOS: Partial<
	Record<ComponentDemoId, () => React.JSX.Element>
> = {
	button: () => (
		<Stack direction="row" gap={3} align="center">
			<Button>Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="icon" aria-label="Close">
				×
			</Button>
		</Stack>
	),
	"button-group": () => (
		<ButtonGroup>
			<Button type="button" variant="secondary">
				Left
			</Button>
			<Button type="button" variant="secondary">
				Right
			</Button>
		</ButtonGroup>
	),
	input: () => <Input placeholder="you@example.com" aria-label="Email" />,
	"input-group": () => (
		<InputGroup leading="@">
			<Input aria-label="Username" placeholder="handle" />
		</InputGroup>
	),
	textarea: () => <Textarea id="demo-bio" aria-label="Bio" rows={3} />,
	select: () => (
		<Select aria-label="Plan">
			<option>Free</option>
			<option>Pro</option>
		</Select>
	),
	combobox: () => (
		<Combobox
			aria-label="Team"
			options={[
				{ value: "eng", label: "Engineering" },
				{ value: "design", label: "Design" },
			]}
		/>
	),
	checkbox: () => <Checkbox id="demo-agree" label="I agree to the terms" />,
	radio: () => (
		<Radio name="solo" id="solo-a" label="Option A" value="a" />
	),
	"radio-group": () => (
		<RadioGroup legend="Size" description="Pick one size.">
			<Radio name="size" id="size-s" label="Small" value="s" />
			<Radio name="size" id="size-m" label="Medium" value="m" />
		</RadioGroup>
	),
	switch: () => (
		<Switch id="demo-switch" label="Email notifications" defaultChecked />
	),
	slider: () => <Slider aria-label="Volume" defaultValue={60} />,
	"toggle-group": () => <ToggleGroupDemo />,
	rating: () => <RatingDemo />,
	"number-input": () => <NumberInputDemo />,
	"file-input": () => <FileInput aria-label="Upload" />,
	"date-input": () => <DateInput aria-label="Start date" />,
	"color-input": () => (
		<ColorInput aria-label="Brand color" defaultValue="#0369a1" />
	),
	"search-input": () => (
		<SearchInput aria-label="Search docs" placeholder="Search…" />
	),
	form: () => (
		<Form aria-label="Signup">
			<FormField label="Email" htmlFor="demo-email" helper="We never spam">
				<Input id="demo-email" type="email" />
			</FormField>
			<FieldHelper>Helper text can also be used standalone.</FieldHelper>
			<FieldError>Example validation message</FieldError>
			<Label htmlFor="demo-notes">Notes</Label>
			<Textarea id="demo-notes" rows={2} />
			<Button type="submit">Submit</Button>
		</Form>
	),
	fieldset: () => (
		<Fieldset legend="API credentials">
			<Input aria-label="API key" placeholder="sk_live_…" />
		</Fieldset>
	),
};
