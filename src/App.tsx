import { Route, Routes } from "react-router-dom";
import { DocsLayout } from "./DocsLayout";
import { ComponentsPage } from "./pages/ComponentsPage";
import { HomePage } from "./pages/HomePage";
import { ThemingPage } from "./pages/ThemingPage";

export function App() {
	return (
		<DocsLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/components" element={<ComponentsPage />} />
				<Route path="/theming" element={<ThemingPage />} />
			</Routes>
		</DocsLayout>
	);
}
